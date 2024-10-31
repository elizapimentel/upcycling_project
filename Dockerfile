FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./ 

RUN npm ci

RUN npm install -g @nestjs/cli

COPY . .

RUN npm run build

FROM node:20-slim

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl postgresql-client && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/tsconfig.json ./ 
COPY .env ./

CMD ["npm", "run", "start:prod"]
