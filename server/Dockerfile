# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependências e instalar tudo
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci

# Copiar código e build
COPY . .
RUN npx prisma generate && npm run build

# Compilar seed.ts para JavaScript
RUN npx tsc prisma/seed.ts --outDir dist/prisma --esModuleInterop --skipLibCheck

# Production stage  
FROM node:20-alpine

WORKDIR /app

# Instalar netcat
RUN apk add --no-cache netcat-openbsd

# Copiar package.json e instalar apenas produção
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev && \
    npm install prisma && \
    npm cache clean --force

# Copiar apenas arquivos essenciais do build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Gerar Prisma Client
RUN npx prisma generate

EXPOSE 4000

CMD ["sh", "-c", "while ! nc -z db 5432; do echo 'Waiting for db...'; sleep 2; done; npx prisma migrate deploy && node dist/prisma/seed.js && node dist/app.js"]