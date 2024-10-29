import { IsArray, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { TypeMember } from "../../common/enums/types-.register.enum";

export class CreateMemberDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsOptional()
    businessName?: string;

    @IsPhoneNumber()
    @IsOptional()
    phone?: string;

    @IsDateString()
    @IsNotEmpty()
    birth: Date;

    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    socialMedia?: string[];

    @IsEnum(TypeMember)
    @IsNotEmpty()
    memberType: TypeMember;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

}
