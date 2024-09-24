import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

//@ts-expect-error import
if (import.meta.env.PROD) {
  async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    app.enableCors();
    await app.listen(3000);
  }
  bootstrap();
}

export const app = NestFactory.create(AppModule);
