FROM node:20.3.1 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci --production

COPY . .

RUN npm run build

FROM node:20.3.1-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl postgresql-client && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY .env ./

EXPOSE 3000

CMD npx typeorm migration:run -d dist/db_config/postgres.config.js && node dist/main.js