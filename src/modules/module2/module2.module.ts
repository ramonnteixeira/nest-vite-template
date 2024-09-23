import { Module } from '@nestjs/common';
import { MyModule2Controller } from './module2.controller';

@Module({
  imports: [],
  controllers: [MyModule2Controller],
  providers: [],
})
export class MyModule2Module {}
