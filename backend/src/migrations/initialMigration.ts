import { MigrationInterface, QueryRunner } from "typeorm";

export class DropUserTable1678341234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

export class CreateUserTable1678341234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        "name" varchar NOT NULL,
        "email" varchar NOT NULL,
        "password" varchar NOT NULL,
        "role" varchar NOT NULL DEFAULT 'user'
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
