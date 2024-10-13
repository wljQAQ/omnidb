import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BiTableService } from './bi-table.service';
import { BiTable } from './entities/bi-table.entity';
import { CreateBiTableInput } from './dto/create-bi-table.input';
import { UpdateBiTableInput } from './dto/update-bi-table.input';

@Resolver(() => BiTable)
export class BiTableResolver {
  constructor(private readonly biTableService: BiTableService) {}

  @Mutation(() => BiTable)
  createBiTable(@Args('createBiTableInput') createBiTableInput: CreateBiTableInput) {
    return this.biTableService.create(createBiTableInput);
  }

  @Query(() => [BiTable], { name: 'biTable' })
  findAll() {
    return this.biTableService.findAll();
  }

  @Query(() => BiTable, { name: 'biTable' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.biTableService.findOne(id);
  }

  @Mutation(() => BiTable)
  updateBiTable(@Args('updateBiTableInput') updateBiTableInput: UpdateBiTableInput) {
    return this.biTableService.update(updateBiTableInput.id, updateBiTableInput);
  }

  @Mutation(() => BiTable)
  removeBiTable(@Args('id', { type: () => Int }) id: number) {
    return this.biTableService.remove(id);
  }
}
