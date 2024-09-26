import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "./Book";
import { Dish } from "./Dish";

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cliente!: string;

  @Column()
  data!: Date;

  @ManyToMany(() => Dish)
  @JoinTable()
  pedidos!: Dish[];

  @ManyToMany(() => Book)
  @JoinTable()
  livros!: Book[];

  @Column({ default: "pendente" })
  status!: string;
}
