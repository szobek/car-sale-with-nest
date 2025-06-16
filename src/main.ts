import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.use(
    cookieSession({
      keys: ['qMi&uN9mKx7Z6f'],
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
