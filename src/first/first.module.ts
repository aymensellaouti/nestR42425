import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerServiceService } from './logger-service/logger-service.service';
import { APP_CONST } from '../config/app-constantes.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { First } from './entity/first.entity';

@Module({
  controllers: [FirstController],
  imports: [TypeOrmModule.forFeature([
    First
  ])],
  providers: [
    FirstService,
    {
      provide: APP_CONST.randomString,
      useValue: () => 'test'
    },  
    LoggerServiceService
  ]
})
export class FirstModule {}
