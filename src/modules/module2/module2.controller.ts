import { Controller, Get } from '@nestjs/common';

@Controller('/module2')
export class MyModule2Controller {
  constructor() {}

  @Get()
  getHello(): string {
    return "module2";
  }
}
