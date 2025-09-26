# CIntegre+
## 📖 Sobre o Projeto
Esse é um projeto feito para a cadeira de Desenvolvimento de Software, em conjunto com a prefeitura de Recife. O objetivo do CIntegre+ é de motivar a realização de atividades propostas por ONGs para escolas da rede pública de ensino de Recife. Buscamos trazer uma solução gamificada para que as atividades possam ser feitas de maneira mais leve e lúdica.

## 🛠️ Tecnologias Utilizadas
- **NextJS**: Usado para o Front
- **Express**: Usado para o Back
- **Prisma**: Usado para abstrair a camada de dados

## 🛑 Pré-requisitos
- Docker Desktop (ou Docker Engine)

## ↕️ Comandos para rodar o backend
### Lembrar de copiar as variáveis de ambiente no seu `.env`
```bash
  # Esse é só um template de exemplo para as variaveis as que devem ser usadas estão no notion
  DATABASE_URL="postgresql://POSTGRESQL_USERNAME:POSTGRESQL_PASSWORD@localhost:5432/POSTGRESQL_DATABASE?schema=public"
  DB_PORT=0000
  POSTGRESQL_USERNAME=example
  POSTGRESQL_PASSWORD=example
  POSTGRESQL_DATABASE=example
```

1. Instalar as dependências 
  ```bash
  cd server      # entrar na pasta do servidor
  npm install
  ```
2. Subir o container
  ```bash
  # Para que o comando funcione você precisa ter o docker desktop instalado
  docker compose up -d # o -d permite que ele rode em segundo plano
  ```
3. Gerar o banco de dados (só precisa rodar na primeira vez ou quando alguem fizer uma mudança)
  ```bash
  # Gera o cliente Prisma para o TypeScript entender seu banco de dados
  npx prisma generate

  # Aplica as migrations existentes para criar/atualizar as tabelas no banco
  npx prisma migrate deploy 
  ```
4. Rodar o projeto
  ```bash
  npm run dev
  ```

## 👤 Autor
| <img src="https://avatars.githubusercontent.com/u/151575079?s=400&u=96fac0907f9100c143dc9f46242cacdf17af240f&v=4" alt="Lucas Torres" width="120"> | <img src="https://scontent.frec34-1.fna.fbcdn.net/v/t39.30808-6/480868752_3842467816010887_4925318128406327982_n.jpg?_nc_cat=107&cb=99be929b-ca288af0&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFCldqPpfgG3gNblHBlUQZZaKeMZ4J-Oktop4xngn46S7tSVcEBKVPZHwYLQTJA50LJoOT2Wn30WkVqNY-xRArA&_nc_ohc=y7TP8wkPTg4Q7kNvwHNsYHv&_nc_oc=AdmcD6ip278__IwCtirJSjdAb2IrkrCsPX40N-Y-PZAp1CxZuZWaAoRfJyVpUgn0YUgkEV6aOhPgB0B0YuqUZ6ds&_nc_zt=23&_nc_ht=scontent.frec34-1.fna&_nc_gid=6_9HPLuA7lN21V5oF6Fyfw&oh=00_AfRcyLH183tQDgmvjMfZbKlQJOC-5S7yVHH1JPKEqigS6Q&oe=68763B13" alt="Isabelle" width="120"> | <img src="https://avatars.githubusercontent.com/u/189648248?v=4" alt="Eduarda" width="120"> | <img src="https://avatars.githubusercontent.com/u/81860139?v=4" alt="Daniel" width="120"> | <img src="https://avatars.githubusercontent.com/u/205567414?v=4" alt="Agata" width="120"> | <img src="https://avatars.githubusercontent.com/u/84592591?v=4" alt="Felipe" width="120"> | <img src="URL_DA_FOTO_AQUI" width="120"> |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **[Lucas Torres](https://github.com/lucaastorres7)** | **[Isabelle Tenorio](https://github.com/IsabelleTenorio)** | **[Eduarda Rodrigues](https://github.com/dudarmouras)** | **[Daniel Mendonça](https://github.com/danielrmendonca)** | **[Agata Giovanna](https://github.com/agatagio)** | **[Felipe Milk](https://github.com/Felipeds-L)** | **[Matheus Henrique](https://github.com/MatheusHenriqueCIN)** |
