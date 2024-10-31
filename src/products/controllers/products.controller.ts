import { Controller, Post, Body, Param, Get, Inject } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsEntity } from '../entities/products.entity';
import { IProductService } from '../services/IProductService.interface';
import { MemberSummary } from '../../common/enums/types-.register.enum';


@Controller('products')
export class ProductsController {
  constructor(
    @Inject(IProductService)
    private readonly productsService: IProductService
  ) { }

  @Post(':memberId')
  async createProduct(
    @Param('memberId') memberId: string,
    @Body() productData: CreateProductDto,
  ): Promise<Omit<ProductsEntity, 'owner'>> {
    return this.productsService.createProduct(productData, memberId);
  }

  @Get('member/:memberId')
  async findProductsByMember(@Param('memberId') memberId: string,): Promise<(ProductsEntity & { owner: MemberSummary })[]> {
    return this.productsService.findProductsByMember(memberId);
  }


}
