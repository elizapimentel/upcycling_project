import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AddressEntity } from '../entities/address.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressService {
  constructor(private readonly httpService: HttpService) {}

  async fetchAddressFromZipCode(zipCode: string): Promise<AddressEntity> {
    const url = `https://viacep.com.br/ws/${zipCode}/json/`;
    const response = await lastValueFrom(this.httpService.get(url));

    const { cep, logradouro, bairro, localidade, uf } = response.data;

    const address = new AddressEntity();
    address.zipCode = cep;
    address.street = logradouro;
    address.neighborhood = bairro;
    address.city = localidade;
    address.state = uf;

    return address;
  }
}
