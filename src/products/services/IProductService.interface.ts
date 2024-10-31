import { MemberSummary } from '../../common/enums/types-.register.enum';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsEntity } from '../entities/products.entity';

export interface IProductService {
    createProduct(product: CreateProductDto, memberId: string): Promise<Omit<ProductsEntity, 'owner'>>;
    findProductsByMember(memberId: string): Promise<(ProductsEntity & { owner: MemberSummary })[]>;

}

export const IProductService = Symbol('IProductService');