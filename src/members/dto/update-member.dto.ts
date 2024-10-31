import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsPhoneNumber, IsEmail, IsStrongPassword } from "class-validator";

export class UpdateMemberDto {

    @ApiProperty({ description: "Nome completo do membro", required: false })
    @IsString()
    @IsOptional()
    fullName?: string;

    @ApiProperty({ description: "Nome comercial do membro", required: false })
    @IsString()
    @IsOptional()
    businessName?: string;

    @ApiProperty({ description: "Número de telefone do membro", required: false })
    @IsPhoneNumber()
    @IsOptional()
    phone?: string;

    @ApiProperty({ description: "Email do membro", required: false })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ description: "Senha segura do membro", required: false })
    @IsStrongPassword()
    @IsOptional()
    password?: string;

    @ApiProperty({ description: "Rede social do membro", required: false })
    @IsString()
    @IsOptional()
    socialMedia?: string;

    @ApiProperty({ description: "Código postal (CEP) do membro", required: false })
    @IsString()
    @IsOptional()
    zipCode?: string;
}
