# Etapa 1 - Build
FROM node:20 AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Gerar os arquivos compilados para produção
RUN npm run build

# Etapa 2 - Produção
FROM node:20

WORKDIR /app

# Copiar apenas os arquivos necessários do build
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Copiar arquivo .env
COPY .env .env

# Expor porta (se o server rodar na 3000, por exemplo)
EXPOSE 3000

# Rodar o servidor
CMD ["node", "dist/app.js"]
