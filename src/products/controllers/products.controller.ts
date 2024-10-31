import { Controller, Post, Body, Param } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsEntity } from '../entities/products.entity';
import { IProductService } from '../services/IProductService.interface';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: IProductService) {}

  @Post(':memberId')
    async createProduct(
        @Param('memberId') memberId: string,
        @Body() productData: CreateProductDto,
    ): Promise<Omit<ProductsEntity, 'owner'>> {
        return this.productsService.createProduct(productData, memberId);
    }

  // @Get()
  // findAll() {
  //   return this.productsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.productsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productsService.update(+id, updateProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
