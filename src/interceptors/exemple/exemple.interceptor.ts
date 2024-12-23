import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class ExempleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // traitement avant
    const startDate = new Date().getMilliseconds();
    return next.handle().pipe(
      tap(() => {
        const endDate = new Date().getMilliseconds();
        console.log(`La durée de la request est : ${endDate - startDate}ms`);
        
      }), 
      map(reponse => ({
        data: reponse,
        createdAt: new Date().toISOString()
      }))
    );
  }
}
