# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .
# Generate Prisma client
RUN npm run prisma:generate:ogi
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

# Stage 3: Only run the application
FROM node:20-alpine
WORKDIR /app
# Copy only the necessary files from the second stage
COPY --from=0 /app/dist ./dist
COPY --from=1 /app/node_modules ./node_modules
COPY --from=1 /app/node_modules/.prisma ./node_modules/.prisma
# Expose the application port
EXPOSE 3000
# Command to run the application
CMD ["node", "dist/apps/declarant-api-gateway/main.js"]
