import cors from "cors";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import authRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";
import dishRoutes from "./routes/dishRoutes";
import orderRoutes from "./routes/orderRoutes";
import userRoutes from "./routes/userRoutes";

import path from "path";

const app = express();
const port = 3000;

app.use(cors("*"));

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dishes", dishRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
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
