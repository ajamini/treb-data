import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingEntity } from './listing.entity';
import { DownloadCommand } from "./commands/download";
import { MigrationCommand } from "./commands/migration";
import { ProcessCommand } from "./commands/process";

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DBHOST || '172.17.0.2',
      port: parseInt(process.env.DBPORT || '5432'),
      username: process.env.DBUSER || 'postgres',
      password: process.env.DBPASS || 'mysecretpassword',
      database: process.env.DBNAME || 'tredb',
      entities: [ListingEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DownloadCommand, MigrationCommand, ProcessCommand],
})
export class AppModule {}
