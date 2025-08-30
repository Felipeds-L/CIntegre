FROM node:20-alpine

WORKDIR /app

# Copiar dependências e instalar
COPY package.json package-lock.json* ./
RUN npm install

# Copiar código e build
COPY . .

ARG NEXT_PUBLIC_API_URL

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
  
RUN npm run build

EXPOSE 8003

CMD ["npm", "start"]