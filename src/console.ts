import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  try {
    await CommandFactory.run(AppModule);
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
