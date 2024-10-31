import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { TypeProduct } from "../../common/enums/types-.register.enum";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsEnum(TypeProduct)
    @IsNotEmpty()
    productType: TypeProduct;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsString()
    @IsNotEmpty()
    contact: string;

    @IsNotEmpty()
    @IsArray()
    image: string[];
    
}
