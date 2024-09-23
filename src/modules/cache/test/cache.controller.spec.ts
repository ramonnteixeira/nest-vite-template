import { Test, TestingModule } from '@nestjs/testing';
import { CacheController } from '../cache.controller';
import { expect, describe, beforeEach, it } from 'vitest'

describe('CacheController', () => {
  let cacheController: CacheController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CacheController],
      providers: [],
    }).compile();

    cacheController = app.get(CacheController);
  });

  describe('root', () => {
    it('should return "Hello"', () => {
      expect(cacheController.getHello()).toBe('Hello');
    });
  });
});
