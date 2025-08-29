describe('HealthController', () => {
import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../../../src/health/health.controller';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();
    controller = module.get<HealthController>(HealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return status ok', () => {
    expect(controller.check()).toEqual({ status: 'ok' });
  });
});
