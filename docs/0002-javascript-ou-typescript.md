# ADR 0002: Escolha entre JavaScript ou TypeScript para o Projeto

**Data:** 12/07/2025

## Status
Aprovado

## Contexto  
Para garantir a manutenibilidade, a escalabilidade do código e minimizar bugs, precisamos definir uma linguagem de programação principal para o projeto. A escolha se dá entre a flexibilidade dinâmica do JavaScript e a segurança que vem da tipagem do TypeScript.

## Opções Consideradas  
1. TypeScript
2. JavaScript
   
## Decisão
Escolhemos o **TypeScript** como a linguagem padrão do projeto. A decisão se baseia nos benefícios que vem com a tipagem estática, como a detecção de erros em tempo de compilação e a melhoria no código, que superam o tempo maior de aprendizado e configuração.

## Consequências  
### 🟢 Positivas:
- **Redução de Erros em Produção**: A verificação de tipos em tempo de compilação previne uma vários bugs comuns em JavaScript, como erros de null/undefined e passagem de tipos de dados incorretos entre funções.
- **Melhoria na Experiência de Desenvolvimento**: A tipagem estática habilita recursos poderosos no VSCode, como autocomplete mais inteligente, tornando o desenvolvimento mais rápido e seguro.
- **Alinhamento com o Mercado**: TypeScript tem ampla adoção em projetos corporativos e de código aberto, o que aumenta a base de conteúdo para estudo e facilita a inserção dos membros da equipe no mercado.
  
### 🔴 Negativas:
- **Curva de Aprendizagem Inicial**: Membros da equipe menos familiarizados com sistemas de tipos precisam de um tempo de adaptação para se tornarem mais produtivos.
- **Redução na Velocidade Inicial**: Durante a fase de adaptação, a velocidade de entrega de novas funcionalidades pode ser reduzida enquanto a equipe se acostuma com os padrões de tipagem. É esperado que esse tempo seja compensado pela redução de tempo gasto com debugging.

## Autor  
**Lucas Torres <@lrts>**
