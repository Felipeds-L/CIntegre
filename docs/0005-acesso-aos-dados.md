# ADR 0005: Acesso aos Dados

**Data:** 12/07/2025

## Status
Aprovado

## Contexto  
Com o uso do TypeScript e PostgreSQL, enfrentamos o desafio de garantir a segurança de tipos de ponta a ponta, desde a requisição até a persistência no banco de dados. Precisamos de acesso a dados que não só facilite as operações de CRUD, mas que também se integre ao nosso ambiente TypeScript, validando as queries e fornecendo uma melhor experiência de desenvolvimento.

## Opções Consideradas  
1. Prisma: Um ORM com foco em segurança de tipos.
2. Knex.js: Um Query Builder que ajuda a construir consultas SQL com sintaxe de JS.
   
## Decisão
Escolhemos o **Prisma** por conta da melhor integração com o ambiente TypeScript. O cliente do Prisma fornece maior segurança de tipos para os resultados das queries, modelos e relações, o que diminui a possibilidade de erros entre a aplicação e o banco. A experiência prévia dos integrantes com o Prisma também valida essa escolha e garante uma melhor e mais rápida adoção.

## Consequências  
### 🟢 Positivas:
- Segurança de Tipos: Elimina a distância entre os tipos do banco e da aplicação. Isso faz com que os erros sejam pegos em tempo de compilação e não em execução.
- Maior produtividade: O Prisma oferece um autocomplete rico na IDE para todas as operações, o que acelera bastante a escrita do código.
- Mais simples: As migrações do Prisma, baseados no arquivo de esquema, torna a evolução do banco de dados mais declarativa e simples de gerenciar.

### 🔴 Negativas:
- Curva de Aprendizagem: Embora seja simples para operações CRUD, a equipe precisa aprender a sintaxe específica do `schema.prisma` e as nuances da API do Prisma Client para casos de uso mais avançados.

## Autor  
**Lucas Torres <@lrts>**
