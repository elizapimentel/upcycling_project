// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//     imports: [
//       TypeOrmModule.forRootAsync({
//         imports: [ConfigModule],
//         inject: [ConfigService],
//         useFactory: async (configService: ConfigService) => ({
//           type: 'postgres',
//           host: configService.get<string>('DB_HOST'),
//           port: configService.get<number>('DB_PORT'),
//           username: configService.get<string>('DB_USERNAME'),
//           password: configService.get<string>('DB_PASSWORD'),
//           database: configService.get<string>('DB_DATABASE'),
//           entities: [],
//           autoLoadEntities: true,
//           synchronize: false,
//           logging: true,
//         }),
//     }),
//     ]
//   })
  
//   export class DbModule {}