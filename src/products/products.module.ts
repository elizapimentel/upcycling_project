import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/products.entity';
import { MemberEntity } from '../members/entities/member.entity';
import { IProductService } from './services/IProductService.interface';

@Module({
  controllers: [ProductsController],
  providers: [{
    provide: IProductService,
    useClass: ProductsService,
  }
  ],
  exports: [IProductService],
  imports: [
    TypeOrmModule.forFeature([ProductsEntity, MemberEntity]),
  ],
})
export class ProductsModule {}
