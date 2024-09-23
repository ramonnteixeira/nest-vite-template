import { Test, TestingModule } from '@nestjs/testing';
import { MyModule2Controller } from '../module2.controller';
import { expect, describe, beforeEach, it } from 'vitest'

describe('MyModule2Controller', () => {
  let myModule2Controller: MyModule2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MyModule2Controller],
      providers: [],
    }).compile();

    myModule2Controller = app.get(MyModule2Controller);
  });

  describe('root', () => {
    it('should return "module"', () => {
      expect(myModule2Controller.getHello()).toBe('module2');
    });
  });
});
