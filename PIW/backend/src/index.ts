import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './data-source';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Projeto Final</title>
        </head>
        <body>
          <h1>Verso & Café é um cafeteria, que oferece aos seus clientes excelentes opções de bebidas, lanches e livros!</h1>
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

AppDataSource.initialize()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server rodando na porta http://localhost:${port}`);
        });
    })
    .catch((error) => console.log(error));