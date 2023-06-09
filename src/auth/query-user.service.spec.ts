import { Test, TestingModule } from '@nestjs/testing';
import { QueryUserService } from './query-user.service';

describe('QueryUserService', () => {
  let service: QueryUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QueryUserService],
    }).compile();

    service = module.get<QueryUserService>(QueryUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
