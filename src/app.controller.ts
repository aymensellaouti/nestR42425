import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { from, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor() {}

  //Combinaison Method + URI => quelle request executer
  @Get('')
  getHello(
    // @Param('haja') haja
  ): string {
    return 'HELLO RT4 2024 2025';
  }

  @Get('observable')
  testObservable(): Observable<number> {
    const tab = [1,2,3];
    // 1 2 3
    return from(tab);
  }


}
