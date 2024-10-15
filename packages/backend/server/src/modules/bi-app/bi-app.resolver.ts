import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';

import { BiAppService } from './bi-app.service';
import { BiApp, CreateBiAppInput } from './type';

@Resolver(() => BiApp)
export class BiAppResolver {
  constructor(private readonly biAppService: BiAppService) {}

  @Query(() => BiApp)
  findBiAppWithTables(@Args('id') id: string) {
    return this.biAppService.findBiAppWithTables(id);
  }

  @Mutation(() => BiApp)
  createBiApp(@Args('app') app: CreateBiAppInput) {
    return this.biAppService.createBiApp(app);
  }
}
