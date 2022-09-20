import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { connectionSource } from '../ormconfig';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: DataSource,
      useFactory: async () => {
        await connectionSource.initialize();
        return connectionSource;
      },
    },
  ],
  exports: [DataSource],
})
export class TypeORMModule {}