FROM node:20-alpine

WORKDIR /app

# Copiar dependências e instalar
COPY package.json package-lock.json* ./
RUN npm install

# Copiar código e build
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]