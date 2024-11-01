import { Module } from '@nestjs/common';
import { DataSyncService } from './data-sync.service';
import { DataSyncGateway } from './data-sync.gateway';

@Module({
  providers: [DataSyncGateway, DataSyncService],
})
export class DataSyncModule {}
