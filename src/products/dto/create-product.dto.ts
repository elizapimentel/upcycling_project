import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { TypeProduct } from "../../common/enums/types-.register.enum";
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
    @ApiProperty({ description: 'Name of the product', example: 'Upcycled Jeans' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({ description: 'Description of the product', example: 'Handcrafted jeans made from recycled materials.' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ description: 'Type of the product', enum: TypeProduct, example: TypeProduct.DONATION })
    @IsEnum(TypeProduct)
    @IsNotEmpty()
    productType: TypeProduct;

    @ApiProperty({ description: 'Price of the product', example: 29.99, required: false })
    @IsOptional()
    @IsNumber()
    price?: number;

    @ApiProperty({ description: 'Contact information for inquiries', example: '1234567890' })
    @IsString()
    @IsNotEmpty()
    contact: string;

    @ApiProperty({ description: 'Array of image URLs for the product', example: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'], isArray: true })
    @IsNotEmpty()
    @IsArray()
    image: string[];
}
