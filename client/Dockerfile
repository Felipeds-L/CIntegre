# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependências e instalar tudo
COPY package.json package-lock.json* ./
RUN npm ci

# Copiar código e build
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Não copiar package-lock.json para forçar install limpo
COPY --from=builder /app/package.json ./

# Instalar apenas runtime essenciais + typescript (para next.config.ts)
RUN npm install --production --no-optional && \
    npm install typescript && \
    npm cache clean --force

# Copiar apenas arquivos essenciais do build
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000

CMD ["npm", "start"]