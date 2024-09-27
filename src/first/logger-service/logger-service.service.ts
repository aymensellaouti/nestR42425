import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerServiceService {

    log(message: unknown): void {
        console.log('From Logger');
        console.log(message);
    }
}
