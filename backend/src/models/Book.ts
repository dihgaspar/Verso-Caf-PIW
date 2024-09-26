import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titulo!: string;

  @Column()
  autor!: string;

  @Column()
  genero!: string;

  @Column()
  ano!: number;

  @Column({ default: true })
  disponivel!: boolean;

  @Column({ nullable: true })
    imagem?: string;
}
