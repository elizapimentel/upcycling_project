import { Controller, Post, Body, Param, Get, Inject } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsEntity } from '../entities/products.entity';
import { IProductService } from '../services/IProductService.interface';
import { MemberSummary } from '../../common/enums/types-.register.enum';
import { ApiBody, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(
    @Inject(IProductService)
    private readonly productsService: IProductService
  ) { }

  @Post(':memberId')
  @ApiParam({
    name: 'memberId',
    description: 'ID of the member who owns the product',
    example: '1234abcd5678',
  })
  @ApiBody({
    type: CreateProductDto,
    description: 'Data required to create a new product',
  })
  @ApiResponse({ status: 201, description: 'Product created successfully.', type: ProductsEntity })
  async createProduct(
    @Param('memberId') memberId: string,
    @Body() productData: CreateProductDto,
  ): Promise<Omit<ProductsEntity, 'owner'>> {
    return this.productsService.createProduct(productData, memberId);
  }

  @Get('member/:memberId')
  @ApiParam({
    name: 'memberId',
    description: 'ID of the member whose products are to be retrieved',
    example: '1234abcd5678',
  })
  @ApiResponse({
    status: 200,
    description: 'List of products belonging to the specified member.',
    type: ProductsEntity,
    isArray: true,
  })
  async findProductsByMember(@Param('memberId') memberId: string,): Promise<(ProductsEntity & { owner: MemberSummary })[]> {
    return this.productsService.findProductsByMember(memberId);
  }


}
