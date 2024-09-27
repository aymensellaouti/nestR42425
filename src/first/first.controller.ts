import { Body, Controller, Get, Post } from '@nestjs/common';
import { FirstService } from './first.service';

@Controller('first')
export class FirstController {
  firstService = new FirstService();
  constructor(){}

  @Get()  
  public bonjour(): string[] {
      return this.firstService.getStudents();
  }


  @Post()
  public addStudent(
    @Body('name') name: string
  ): string[] {
    return this.firstService.addStudent(name);
  }
}
