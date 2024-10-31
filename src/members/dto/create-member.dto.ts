import { IsArray, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";
import { TypeMember } from "../../common/enums/types-.register.enum";
import { Transform } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';

export class CreateMemberDto {
    @ApiProperty({ description: 'Full name of the member', example: 'John Doe' })
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @ApiProperty({ description: 'Business name of the member, if applicable', example: 'Doe Fashion', required: false })
    @IsString()
    @IsOptional()
    businessName?: string;

    @ApiProperty({ description: 'Contact phone number', example: '1234567890', required: false })
    @IsPhoneNumber()
    @IsOptional()
    phone?: string;

    @ApiProperty({ description: 'Birth date in dd/mm/yyyy format', example: '01/01/1990' })
    @IsDateString()
    @IsNotEmpty()
    @Transform(({ value }) => {
        const [day, month, year] = value.split('/');
        return new Date(`${year}-${month}-${day}`);
    })
    birth: Date;

    @ApiProperty({ description: 'ZIP code for address', example: '12345-678' })
    @IsString()
    @IsNotEmpty()
    zipCode: string;

    @ApiProperty({ description: 'Social media handles', example: ['@johndoe', '@doefashion'], required: false, isArray: true })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    socialMedia?: string[];

    @ApiProperty({ description: 'Member type', enum: TypeMember, example: TypeMember.SHOP_OWNER })
    @IsEnum(TypeMember)
    @IsNotEmpty()
    memberType: TypeMember;

    @ApiProperty({ description: 'Email address of the member', example: 'john.doe@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Password for the account, must be strong', example: 'P@ssw0rd!' })
    @IsString()
    @IsStrongPassword()
    @IsNotEmpty()
    password: string;
}
