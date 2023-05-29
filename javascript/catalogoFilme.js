const apiKey = 'b5dc160b41d42e76fbb61b86e3d3978f';
const movieId = 12345; // Substitua pelo ID do filme desejado

fetch(`catalogodefilmes934.com.br${movieId}?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // Faça algo com os dados retornados, por exemplo:
    console.log(data);
  })
  .catch(error => {
    // Trate erros adequadamente
    console.error('Erro:', error);
  });
