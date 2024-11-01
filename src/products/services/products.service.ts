import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from '../entities/products.entity';
import { Repository } from 'typeorm';
import { IProductService } from './IProductService.interface';
import { MemberEntity } from '../../members/entities/member.entity';
import { MemberSummary } from '../../common/enums/types-.register.enum';

@Injectable()
export class ProductsService implements IProductService {

  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productsRepository: Repository<ProductsEntity>,
    @InjectRepository(MemberEntity)
    private readonly memberRepository: Repository<MemberEntity>,
  ) { }

  async createProduct(createProductDto: CreateProductDto, memberId: string): Promise<Omit<ProductsEntity, 'owner'>> {
    const owner = await this.memberRepository.findOne({ where: { id: memberId } });

    if (!owner) {
      throw new NotFoundException('Member not found');
    }

    const product = this.productsRepository.create({
      ...createProductDto,
      owner,
      createdAt: new Date(),
    });

    const savedProduct = await this.productsRepository.save(product);
    const { owner: _, ...result } = savedProduct;

    return result;
  }

  async findProductsByMember(memberId: string): Promise<(ProductsEntity & { owner: MemberSummary })[]> {
    const products = await this.productsRepository.find({
      where: { owner: { id: memberId } },
      relations: ['owner'],
    });

    return products.map(product => {
      const { fullName, businessName, memberType } = product.owner;
      return {
          ...product,
          owner: { fullName, businessName, memberType },
      } as ProductsEntity & { owner: MemberSummary }; 
  });
  }


}
