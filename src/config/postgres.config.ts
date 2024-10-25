import { config } from "dotenv";
import { DataSource} from 'typeorm';

config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    entities: [__dirname + '/**/*.entity.ts'],
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
