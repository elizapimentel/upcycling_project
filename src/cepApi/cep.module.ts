import { Module } from '@nestjs/common';
import { AddressService } from './services/address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        TypeOrmModule.forFeature([AddressEntity]), 
        HttpModule
    ],
    providers: [AddressService],
    exports: [AddressService], 
})
export class CepModule {}
