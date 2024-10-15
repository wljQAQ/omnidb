import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BiTableService } from './bi-table.service';
import { BiTable, CreateBiTableInput } from './type';

@Resolver()
export class BiTableResolver {
  constructor(private readonly biTableService: BiTableService) {}

  @Mutation(() => BiTable)
  createBiTable(@Args('table') table: CreateBiTableInput) {
    return this.biTableService.createBiTable(table.name, table.biAppId);
  }
}
