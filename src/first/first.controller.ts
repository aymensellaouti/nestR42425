import { Body, Controller, Get, Inject, Post, Query, Req, UnauthorizedException } from '@nestjs/common';
import { FirstService } from './first.service';
import { APP_CONST } from '../config/app-constantes.config';
import { AddUserDto } from './dto/add-user.dto';
import { First } from './entity/first.entity';
import { Observable } from 'rxjs';

@Controller('first')
export class FirstController {
  
  constructor(
    private firstService: FirstService,
    @Inject(APP_CONST.randomString)
    private random 
  ){}

  @Get()  
  public bonjour(
    @Query('api_key') apiKey: string
  ): Promise<First[]> {
    if (apiKey == 'myApiKey')
      return this.firstService.getStudents();
    throw new UnauthorizedException('Veuillez vérifier vos credentials')
  }


  @Post()
  public addStudent(
    @Body() user: AddUserDto,
    @Query('api_key') apiKey: string
  ): Promise<First> {
    // lazemni key bech nkhalih iet3ada
    if (apiKey == 'myApiKey')
      return this.firstService.addStudent(user);
    throw new UnauthorizedException('Veuillez vérifier vos credentials')
  }
}
