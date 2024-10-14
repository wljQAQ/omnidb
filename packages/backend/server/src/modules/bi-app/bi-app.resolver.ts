import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { BiAppService } from './bi-app.service';
import { BiApp } from './type';

@Resolver(() => BiApp)
export class BiAppResolver {
  constructor(private readonly biAppService: BiAppService) {}

  @Query(() => [BiApp], { name: 'biApp' })
  async findAll() {
    // console.log('findAll', await this.biAppService.findAll());
    // return this.biAppService.findAll();
    return [{ id: 'test' }];
  }

  // @Query(() => BiApp, { name: 'biApp' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   console.log('findOne');
  //   return this.biAppService.findOne(id);
  // }

  // @Mutation(() => BiApp)
  // updateBiApp(@Args('updateBiAppInput') updateBiAppInput: UpdateBiAppInput) {
  //   return this.biAppService.update(updateBiAppInput.id, updateBiAppInput);
  // }

  // @Mutation(() => BiApp)
  // removeBiApp(@Args('id', { type: () => Int }) id: number) {
  //   return this.biAppService.remove(id);
  // }
}
