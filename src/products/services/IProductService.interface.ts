import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsEntity } from '../entities/products.entity';

export interface IProductService {
    createProduct(product: CreateProductDto, memberId: string): Promise<Omit<ProductsEntity, 'owner'>>;

}

export const IProductService = Symbol('IProductService');