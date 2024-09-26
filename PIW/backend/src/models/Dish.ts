import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column('decimal', { precision: 5, scale: 2 })
  preco!: number;

  @Column()
  descricao!: string;

  @Column()
  categoria!: string;

  @Column({ default: true })
  disponivel!: boolean;

  @Column({ nullable: true })
    imagem?: string;
}
