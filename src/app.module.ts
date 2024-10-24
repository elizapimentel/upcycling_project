import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersModule } from './members/members.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MembersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
