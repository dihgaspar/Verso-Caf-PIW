import express from 'express';

const app = express();
const port = 3000;

app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Projeto Final</title>
      </head>
      <body>
        <h1>Verso & Café é um cafeteria, que oferece aos seus clientes excelentes opções de bebidas, lanches e livros!</p>
        <h2>Autores</h2>
        <ul>
          <li>Diogo Gaspar</li>
          <li>José Aurivanio</li>
          <li>Carol Andrade</li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
