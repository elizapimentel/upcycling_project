import { IsArray, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { TypeMember } from "../../common/enums/types-.register.enum";
import { Transform } from "class-transformer";

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
    @Transform(({ value }) => {
        const [day, month, year] = value.split('/');
        return new Date(`${year}-${month}-${day}`);
      })
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
