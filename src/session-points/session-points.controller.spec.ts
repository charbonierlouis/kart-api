import { Test, TestingModule } from '@nestjs/testing';
import { SessionPointsController } from './session-points.controller';
import { SessionPointsService } from './session-points.service';

describe('SessionPointsController', () => {
  let controller: SessionPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SessionPointsController],
      providers: [SessionPointsService],
    }).compile();

    controller = module.get<SessionPointsController>(SessionPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
