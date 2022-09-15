import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsoleModule } from 'nestjs-console';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingEntity } from './listing.entity';
import { DownloadCommand } from "./commands/download";
import { MigrationCommand } from "./commands/migration";
import { ProcessCommand } from "./commands/process";

@Module({
  imports: [
    ConsoleModule,
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'trebd',
      entities: [ListingEntity],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DownloadCommand, MigrationCommand, ProcessCommand],
})
export class AppModule {}
