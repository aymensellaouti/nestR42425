import { Controller, Get, Param } from '@nestjs/common';

import { from, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor() {}

  //Combinaison Method + URI => quelle request executer
  @Get('')
  getHello(
    // @Param('haja') haja
  ): string {
    return '';
  }

  @Get('observable')
  testObservable(): Observable<number> {
    const tab = [1,2,3];
    // 1 2 3
    return from(tab);
  }


}
