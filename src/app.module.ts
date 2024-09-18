import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';

@Module({
  imports: [FirstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
