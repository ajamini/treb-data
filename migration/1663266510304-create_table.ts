import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1663266510304 implements MigrationInterface {
    name = 'createTable1663266510304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`listing\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ml_num\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_4c8b8a2374f7457312357fc610\` (\`ml_num\`), PRIMARY KEY (\`id\`)) ENGINE=myisam`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_4c8b8a2374f7457312357fc610\` ON \`listing\``);
        await queryRunner.query(`DROP TABLE \`listing\``);
    }

}
