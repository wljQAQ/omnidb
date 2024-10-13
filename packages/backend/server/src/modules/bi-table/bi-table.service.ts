import { Injectable } from '@nestjs/common';
import { CreateBiTableInput } from './dto/create-bi-table.input';
import { UpdateBiTableInput } from './dto/update-bi-table.input';

@Injectable()
export class BiTableService {
  create(createBiTableInput: CreateBiTableInput) {
    return 'This action adds a new biTable';
  }

  findAll() {
    return `This action returns all biTable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biTable`;
  }

  update(id: number, updateBiTableInput: UpdateBiTableInput) {
    return `This action updates a #${id} biTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} biTable`;
  }
}
