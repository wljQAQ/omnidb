import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BiAppService } from './bi-app.service';
import { BiApp } from './entities/bi-app.entity';
import { CreateBiAppInput } from './dto/create-bi-app.input';
import { UpdateBiAppInput } from './dto/update-bi-app.input';

@Resolver(() => BiApp)
export class BiAppResolver {
  constructor(private readonly biAppService: BiAppService) {}

  @Mutation(() => BiApp)
  createBiApp(@Args('createBiAppInput') createBiAppInput: CreateBiAppInput) {
    return this.biAppService.create(createBiAppInput);
  }

  @Query(() => [BiApp], { name: 'biApp' })
  findAll() {
    return this.biAppService.findAll();
  }

  @Query(() => BiApp, { name: 'biApp' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.biAppService.findOne(id);
  }

  @Mutation(() => BiApp)
  updateBiApp(@Args('updateBiAppInput') updateBiAppInput: UpdateBiAppInput) {
    return this.biAppService.update(updateBiAppInput.id, updateBiAppInput);
  }

  @Mutation(() => BiApp)
  removeBiApp(@Args('id', { type: () => Int }) id: number) {
    return this.biAppService.remove(id);
  }
}
