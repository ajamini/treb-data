import { DataSource } from 'typeorm';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mysecretpassword',
  database: 'trebd',
  entities: ['src/**.entity.ts'],
  migrations: ['migration/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  logging: false,
  synchronize: false,
  name: 'default',
});
