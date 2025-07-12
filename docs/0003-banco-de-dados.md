# ADR 0003: Escolha do Banco de Dados

**Data:** 12/07/2025

## Status
Aprovado

## Contexto  
Nossa aplicação precisa de um banco de dados para persistir informações críticas como contas de usuários, atividades de ONGs, entre outras. Os principais requisitos para os dados são:
- **Consistência e Integridade**
- **Relacionamentos Complexos**

## Opções Consideradas  
1. PostgreSQL: Um sistema de banco de dados relacional.
2. MongoDB: Um banco de dados NoSQL orientado a documentos.
   
## Decisão
Escolhemos o **PostgreSQL** como o Banco de Dados do projeto. Essa decisão foi tomada pois o PostgreSQL atende os nossos requisitos de consistência transacional (ACID) e é otimizado para os dados que nossa aplicação irá manipular. A familiaridade dos membros da equipe com bancos de dados SQL é mais um ponto importante que vai acelerar o desenvolvimento.

## Consequências  
### 🟢 Positivas:
- **Integridade dos Dados**: Por seguir o padrão ACID, ele protege a consistência dos dados, o que é crucial para as operações do nosso sistema.
- **Produtividade**: A experiência prévia dos membros da equipe com bancos de dados relacionais reduzirá a curva de aprendizado e vai acelerar o desenvolvimento.
  
### 🔴 Negativas:
- **Menor Flexibilidade**: Qualquer alteração na estrutura das tabelas do banco exige uma migração formal, o que pode tornar o desenvolvimento menos flexível nas fases iniciais.

## Autor  
**Lucas Torres <@lrts>**
