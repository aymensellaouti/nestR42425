import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { ExempleInterceptor } from './interceptors/exemple/exemple.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI
  })
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  app.useGlobalInterceptors(
    new ExempleInterceptor()
  );
  const corsOptions = {
    origin: ['http://localhost:4201', 'http://localhost:4200'],
    optionsSuccessStatus: 200,
  };
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();
