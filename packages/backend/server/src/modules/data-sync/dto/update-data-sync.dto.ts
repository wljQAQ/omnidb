import { PartialType } from '@nestjs/mapped-types';
import { CreateDataSyncDto } from './create-data-sync.dto';

export class UpdateDataSyncDto extends PartialType(CreateDataSyncDto) {
  id: number;
}
