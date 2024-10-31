import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { AppDataSource } from './db_config/postgres.config';

config();

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

async function bootstrap() {
  
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
    process.exit(1); 
  }
  
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: false,
  });
  await app.listen(port);
}
bootstrap();
