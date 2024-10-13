import { Injectable } from '@nestjs/common';
import { CreateBiAppInput } from './dto/create-bi-app.input';
import { UpdateBiAppInput } from './dto/update-bi-app.input';

@Injectable()
export class BiAppService {
  create(createBiAppInput: CreateBiAppInput) {
    return 'This action adds a new biApp';
  }

  findAll() {
    return `This action returns all biApp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biApp`;
  }

  update(id: number, updateBiAppInput: UpdateBiAppInput) {
    return `This action updates a #${id} biApp`;
  }

  remove(id: number) {
    return `This action removes a #${id} biApp`;
  }
}
