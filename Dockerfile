FROM node:20-bookworm-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y \
    openssl \
    && rm -rf /var/lib/apt/lists/*
RUN npm install
COPY . .
RUN npm run prisma:generate:ogi
RUN npm run build

FROM node:20-bookworm-slim
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
RUN npm install --only=production

FROM node:20-bookworm-slim
WORKDIR /app
RUN apt-get update && apt-get install -y \
    openssl \
    && rm -rf /var/lib/apt/lists/*
COPY --from=0 /app/dist ./dist
COPY --from=1 /app/node_modules ./node_modules
COPY --from=1 /app/node_modules/.prisma ./node_modules/.prisma
EXPOSE 3000
CMD ["node", "dist/apps/declarant-api-gateway/main.js"]
