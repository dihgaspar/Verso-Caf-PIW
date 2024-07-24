import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  constructor(id: number, name: string, email: string, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}