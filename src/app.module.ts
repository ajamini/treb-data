import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingEntity } from './listing.entity';
import { DownloadCommand } from "./commands/download";
import { MigrationCommand } from "./commands/migration";
import { ProcessCommand } from "./commands/process";
import { TypeORMModule } from "./typeorm.module";

@Module({
  imports: [
    TypeORMModule,
    HttpModule
  ],
  controllers: [AppController],
  providers: [AppService, DownloadCommand, MigrationCommand, ProcessCommand],
})
export class AppModule {}
