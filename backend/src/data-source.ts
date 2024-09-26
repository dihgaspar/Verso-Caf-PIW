import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "./models/Book";
import { Dish } from "./models/Dish";
import { Order } from "./models/Order";
import { User } from "./models/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: false,
  logging: false,
  entities: [User, Dish, Book, Order],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source foi inicializado!");
  })
  .catch((err) => {
    console.error("Erro durante a inicialização:", err);
  });
