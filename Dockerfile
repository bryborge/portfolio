# Stage 1: Install production dependencies and build
FROM node:22-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install --package-lock-only && npm audit --audit-level=high || true
EXPOSE 3000

FROM base AS builder
WORKDIR /app
RUN npm ci
COPY . .
RUN npm run build

FROM base AS production
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

ENV NODE_ENV=production

CMD ["npm", "start"]
