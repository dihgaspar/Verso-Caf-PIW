import "reflect-metadata";
import { AppDataSource } from "./data-source";

async function createTables() {
  try {
    await AppDataSource.initialize();
    console.log("Data Source foi inicializado!");

    await AppDataSource.query(`
            CREATE TABLE IF NOT EXISTS user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR NOT NULL
            );
        `);

    await AppDataSource.query(`
            CREATE TABLE IF NOT EXISTS dish (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome VARCHAR NOT NULL,
                preco DECIMAL(5, 2) NOT NULL,
                descricao TEXT NOT NULL,
                categoria VARCHAR NOT NULL,
                disponivel BOOLEAN DEFAULT TRUE,
                imagem VARCHAR
            );
        `);

    await AppDataSource.query(`
            CREATE TABLE IF NOT EXISTS book (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR NOT NULL,
                autor VARCHAR NOT NULL,
                genero VARCHAR NOT NULL,
                ano INTEGER NOT NULL,
                disponivel BOOLEAN DEFAULT TRUE,
                imagem VARCHAR
            );
        `);

    await AppDataSource.query(`
            CREATE TABLE IF NOT EXISTS orders (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                cliente VARCHAR NOT NULL,
                data DATETIME NOT NULL,
                status VARCHAR DEFAULT 'pendente'
            );
        `);

    console.log("Tabelas criadas com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  } finally {
    await AppDataSource.destroy();
  }
}

createTables();
