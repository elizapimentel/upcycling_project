import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CraftersModule } from './crafters/crafters.module';

@Module({
  imports: [CraftersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
