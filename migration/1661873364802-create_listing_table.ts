import { MigrationInterface, QueryRunner } from "typeorm";

export class createListingTable1661873364802 implements MigrationInterface {
    name = 'createListingTable1661873364802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "listing" ("id" SERIAL NOT NULL, "ml_num" character varying NOT NULL, CONSTRAINT "UQ_4c8b8a2374f7457312357fc610c" UNIQUE ("ml_num"), CONSTRAINT "PK_381d45ebb8692362c156d6b87d7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "listing"`);
    }

}
