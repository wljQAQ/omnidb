import { Module } from '@nestjs/common';
import { BiTableService } from './bi-table.service';
import { BiTableResolver } from './bi-table.resolver';

@Module({
  providers: [BiTableResolver, BiTableService],
})
export class BiTableModule {}
