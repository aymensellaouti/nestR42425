import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('first')
export class FirstController {
  students: string[] = [];
  @Get()  
  public bonjour(): string[] {
      return this.students;
  }


  @Post()
  public addStudent(
    @Body('name') name: string
  ): string[] {
    console.log(name);
    
    this.students.unshift(name);
    return this.students;
  }
}
