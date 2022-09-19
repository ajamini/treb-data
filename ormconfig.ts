import { DataSource } from 'typeorm';
import * as fs from 'fs';

export const connectionSource = new DataSource({
  type: 'postgres',
  host: process.env.DBHOST || '172.17.0.2',
  port: parseInt(process.env.DBPORT || '5432'),
  username: process.env.DBUSER || 'postgres',
  password: process.env.DBPASS || 'mysecretpassword',
  database: process.env.DBNAME || 'tredb',
  extra: {
    ssl: {
      ca: fs.readFileSync('./ca-certificate.crt'),
    },
  },
  entities: ['src/**.entity.ts', '**.entity.ts'],
  migrations: ['migration/*.ts'],
  migrationsRun: false,
  migrationsTableName: 'migrations',
  logging: false,
  synchronize: false,
  name: 'default',
});
