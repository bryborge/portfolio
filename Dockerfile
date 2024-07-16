# Stage 1: Install production dependencies and build
FROM node:22.4-alpine AS base
WORKDIR /app
COPY package*.json ./
EXPOSE 3000

FROM base AS builder
WORKDIR /app
RUN npm ci
COPY . .
RUN npm run build

FROM base as production
WORKDIR /app

# RUN addgroup -g 1001 -S nodejs
# RUN adduser -S nextjs -u 1001
# USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

ENV NODE_ENV=production

CMD npm start

# FROM base as dev
# ENV NODE_ENV=development
# RUN npm install
# COPY . .
# CMD npm run dev
