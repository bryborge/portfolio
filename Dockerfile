# Stage 1: Install production dependencies and build
FROM node:22.4-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build
  
# Stage 2: Prepare final image
FROM node:22.4-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

RUN chown -R node:node /app
USER node

EXPOSE 3000

CMD ["npm", "run", "start"]
