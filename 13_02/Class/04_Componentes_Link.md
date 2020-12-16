# Componentes BrowserRouter e Route
Agora, vamos ver um vídeo em que o Link é utilizado e que mostra como a navegação funciona por meio do React Router:

- Vídeo Trybe

No vídeo acima, vimos que Link é o componente a ser usado no lugar de elementos com a tag a, de forma a disponibilizar navegação por URL na sua aplicação SPA sem o recarregamento de página que a tag a exige. Ou seja, se você quiser definir um link que leve quem usa sua aplicação para a URL com o caminho /about, você poderia chamar o componente Link da seguinte forma:

<Link to="/about" > About </Link>

E lembre-se: palavras, imagens, até mesmo outros componentes podem ser componentes filhos do Link! Ser filho do Link significa que, se você clicar neste filho, irá para onde o Link te direciona!