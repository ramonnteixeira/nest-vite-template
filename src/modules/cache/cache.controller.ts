import { Controller, Get } from '@nestjs/common';

@Controller('/cache')
export class CacheController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello';
  }
}
