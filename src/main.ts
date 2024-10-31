import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { AppDataSource } from './db_config/postgres.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Moda Up - API')
    .setDescription('API pro projeto Moda Up, de junção de pessoas que fazem moda com arte e sustentabilidade.')
    .setVersion('1.0')
    .addTag('upcycling')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document); 

  await app.listen(port);
}
bootstrap();
