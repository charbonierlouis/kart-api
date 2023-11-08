import { Test, TestingModule } from '@nestjs/testing';
import { SessionPointsService } from './session-points.service';

describe('SessionPointsService', () => {
  let service: SessionPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SessionPointsService],
    }).compile();

    service = module.get<SessionPointsService>(SessionPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
