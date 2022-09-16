import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.DBHOST ?? 'localhost',
  port: process.env.DBPORT ? parseInt(process.env.DBPORT) : 5432,
  username: process.env.DBUSER ?? 'postgres',
  password: process.env.DBPASS ?? 'mysecretpassword',
  database: 'tredb',
  entities: ['src/**.entity.ts'],
  migrations: ['migration/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  logging: false,
  synchronize: false,
  name: 'default',
});
