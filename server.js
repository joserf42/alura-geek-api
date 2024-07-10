const apiUrl = 'https://my-json-server.typicode.com/joserf42/alura-geek-api/db'; // URL de la API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue válida');
    }
    return response.json(); // Parsea la respuesta como JSON
  })
  .then(data => {
    console.log(data); // Haz algo con los datos recibidos
  })
  .catch(error => {
    console.error('Error:', error);
  });
