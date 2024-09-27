import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { LoggerServiceService } from './logger-service/logger-service.service';

@Module({
  controllers: [FirstController],
  providers: [FirstService, LoggerServiceService]
})
export class FirstModule {}
