import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { FirstService } from './first.service';
import { APP_CONST } from '../config/app-constantes.config';
import { AddUserDto } from './dto/add-user.dto';
import { First } from './entity/first.entity';

@Controller('first')
export class FirstController {
  
  constructor(
    private firstService: FirstService,
    @Inject(APP_CONST.randomString)
    private random 
  ){}

  @Get()  
  public bonjour(): First[] {
      console.log(this.random());
      return this.firstService.getStudents();
  }


  @Post()
  public addStudent(
    @Body() user: AddUserDto
  ): Promise<First> {
    console.log(user);
    return this.firstService.addStudent(user);
  }
}
