import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor() {}

  //Combinaison Method + URI => quelle request executer
  @Get('')
  getHello(): string {
    return 'HELLO RT4 2024 2025';
  }
}
