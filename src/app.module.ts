import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { FirstModule } from './first/first.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstEntity } from './first/entity/first.entity';

@Module({
  imports: [
    FirstModule,
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root', 
      password: '', 
      database: 'rt4Nest2425', 
      autoLoadEntities: true, 
      synchronize: true, 
      logging: true
    })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
