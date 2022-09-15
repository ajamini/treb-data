import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'mysql',
  host: process.env.DBHOST ?? 'localhost',
  port: process.env.DBPORT ? parseInt(process.env.DBPORT) : 3307,
  username: process.env.DBUSER ?? 'root',
  password: process.env.DBPASS ?? 'my-secret-pw',
  database: 'tredb',
  entities: ['src/**.entity.ts'],
  migrations: ['migration/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  logging: false,
  synchronize: false,
  name: 'default',
});
