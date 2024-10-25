import { config } from 'dotenv';
import { DataSource} from 'typeorm';

config();

const DB_URL=`postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?schema=public`;

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: DB_URL,
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
