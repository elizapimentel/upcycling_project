import { config } from "dotenv";
import { DataSource} from 'typeorm';
import { MemberEntity } from '../members/entities/member.entity';
import { ProductsEntity } from "../products/entities/products.entity";
import { AddressEntity } from "../members/entities/address.entity";


config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    entities: [MemberEntity, AddressEntity, ProductsEntity],
    migrations: [__dirname + '/migrations/*.ts'],
    migrationsRun: true,
    logging: true,
});

AppDataSource.initialize()
.then(() => {
  console.log("Data Source has been initialized!");
})
.catch((err) => {
  console.error("Error during Data Source initialization", err);
});
