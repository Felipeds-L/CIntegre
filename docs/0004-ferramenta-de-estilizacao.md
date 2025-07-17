# ADR 0004: Escolha da Ferramenta de Estilização

**Data:** 12/07/2025

## Status
Aprovado

## Contexto  
Para o desenvolvimento da interface do usuário do projeto, precisamos de uma solução de estilização que melhore a produtividade e seja escalável.

## Opções Consideradas  
1. CSS Puro: Utilização de estilo padrão sem abstrações adicionais.
2. Tailwind: Um framework que oferece classes de baixo nível para construir design diretamente no HTML.
3. Styled-Components: Uma biblioteca CSS-in-JS que permite escrever CSS para estilizar componentes em um arquivo JavaScript.
   
## Decisão
Escolhemos o **Tailwind** por ser um framework utilitário. Ele melhora a produtividade ao permitir a estilização diretamente no HTML facilita a manutenção do projeto.

## Consequências  
### 🟢 Positivas:
- **Desenvolvimento Rápido**: Ao eliminar a necessidade de nomear classes e alternar entre arquivos HTML e CSS, o fluxo de trabalho se torna muito mais ágil.
- **Manutenção Simplificada**: Como os estilos são aplicados localmente, é muito mais fácil entender, alterar ou remover estilos de um componente sem causar efeitos colaterais inesperados em outras partes da aplicação.
  
### 🔴 Negativas:
- **Curva de Aprendizagem das Classes**: A produtividade inicial pode ser mais baixa enquanto a equipe se acostuma com os nomes das classes utilitárias do framework.
- **Verbosidade no HTML**: A aplicação de muitas classes utilitárias pode deixar o código HTML visualmente poluído e mais difícil de ler para quem não está acostumado com a abordagem.
- **Menor Flexibilidade para Estilos Dinâmicos**: Comparado ao Styled-Components, é mais complexo criar estilos que dependem de lógica dinâmica ou props em tempo de execução.

## Autor  
**Lucas Torres <@lrts>**
