import { IsString, IsOptional, IsPhoneNumber, IsEmail, IsStrongPassword } from "class-validator";


export class UpdateMemberDto {
    @IsString()
    @IsOptional()
    fullName?: string;

    @IsString()
    @IsOptional()
    businessName?: string;

    @IsPhoneNumber()
    @IsOptional()
    phone?: string;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsStrongPassword()
    @IsOptional()
    password?: string;

    @IsString()
    @IsOptional()
    socialMedia?: string;

    @IsString()
    @IsOptional()
    zipCode?: string;
}
