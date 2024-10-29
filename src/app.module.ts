import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db_config/db.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationOptions: { abortEarly: true },
    }), 
    MembersModule, ProductsModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
