FROM node:20-alpine

WORKDIR /app

# Copiar dependências e schema do Prisma
COPY package.json package-lock.json* ./
COPY prisma ./prisma

# Instalar dependências
RUN npm install

# Copiar código fonte
COPY . .

# Gerar Prisma Client e build
RUN npx prisma generate
RUN npm run build

EXPOSE 4000

CMD ["sh", "-c", "while ! nc -z db 5432; do echo 'Waiting for db...'; sleep 2; done; npx prisma migrate deploy && npm run seed && node dist/app.js"]