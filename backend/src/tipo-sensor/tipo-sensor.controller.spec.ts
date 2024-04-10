import { Test, TestingModule } from '@nestjs/testing';
import { TipoSensorController } from './tipo-sensor.controller';

describe('TipoSensorController', () => {
  let controller: TipoSensorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoSensorController],
    }).compile();

    controller = module.get<TipoSensorController>(TipoSensorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
