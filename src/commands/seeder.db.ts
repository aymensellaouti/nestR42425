import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { FirstService } from "../first/first.service";
import { First } from "../first/entity/first.entity";

async function bootstrap() { 
    const app = await NestFactory.createApplicationContext(AppModule); 	
    // Todo :  Do What you want   

    
    const firstService = app.get(FirstService);
    const user = new First();
    user.email = 'test@tes.com';
    user.password = 'test';
    await firstService.addStudent(user);

    await app.close(); 
} bootstrap();
