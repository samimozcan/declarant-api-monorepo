# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate
RUN npx prisma generate --schema=./prisma/master/schema.prisma
RUN npx prisma generate --schema=./prisma/sec-bridge/schema.prisma

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run the application
FROM node:20-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Install only production dependencies
RUN npm install --only=production

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/apps/declarant-api-gateway/main.js"]
