import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import userRoutes from './routes/userRoutes';
import { User } from './entity/user';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', userRoutes);

app.get('/', (req, res) => {
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

const init = async () => {
  try{
    await createConnection();
    console.log("Conectado ao Banco!")
    app.listen(port, () => {
      console.log(`Servidor rodando na porta http://localhost:${port}`);
    });
  }catch(err){
    console.log("Erro ao conectar ao Banco!" + err)
  }
}

init();