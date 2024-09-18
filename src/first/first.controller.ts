import { Controller, Get } from '@nestjs/common';

@Controller('first')
export class FirstController {
  @Get()  
  public bonjour(): string {
      return 'Bonjour First'
  }
}
