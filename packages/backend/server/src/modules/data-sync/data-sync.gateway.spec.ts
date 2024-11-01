import { Test, TestingModule } from '@nestjs/testing';
import { DataSyncGateway } from './data-sync.gateway';
import { DataSyncService } from './data-sync.service';

describe('DataSyncGateway', () => {
  let gateway: DataSyncGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataSyncGateway, DataSyncService],
    }).compile();

    gateway = module.get<DataSyncGateway>(DataSyncGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
