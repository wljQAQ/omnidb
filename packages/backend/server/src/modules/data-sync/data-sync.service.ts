import { Injectable } from '@nestjs/common';
import { CreateDataSyncDto } from './dto/create-data-sync.dto';
import { UpdateDataSyncDto } from './dto/update-data-sync.dto';

@Injectable()
export class DataSyncService {
  create(createDataSyncDto: CreateDataSyncDto) {
    return 'This action adds a new dataSync';
  }

  findAll() {
    return `This action returns all dataSync`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataSync`;
  }

  update(id: number, updateDataSyncDto: UpdateDataSyncDto) {
    return `This action updates a #${id} dataSync`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataSync`;
  }
}
