# Conteúdo
Primeiro, para estudarmos o useEffect e os hooks customizados, vamos assistir a este vídeo:

- Vídeo Trybe

Em resumo:
O useEffect executa, quando disparado, a função que recebe como primeiro parâmetro;
- Se não receber um segundo parâmetro, ele executa a função sempre que o componente é renderizado;

- Se receber um array vazio como segundo parâmetro, ele executa a função somente quando o componente é montado;

- Quando ele recebe um array com valores dentro, sempre que algum desses valores é alterado, a função é executada;

- Se ele retorna uma função, essa função é executada quando o componente é desmontado e também antes da próxima renderização.

- Um hook customizado por convenção é definido com uma função que começa com a palavra use. É possível incorporar a lógica de outros hooks em seu funcionamento.

# Para fixar
1. Faça um componente funcional React com as seguintes funcionalidades:
- A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;

- Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;

- A mensagem de acerto é removida 4 segundos depois de ser exibida;

- O timer é removido quando o componente é desmontado.

2. Agora é hora de sentir o poder dos Hooks customizados na pele! Faça uma Todo list simples usando um hook customizado useArray para manipular os dados guardados na lista.
