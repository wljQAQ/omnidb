import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

import { BiTable } from '../bi-table/type';

@ObjectType()
export class BiApp {
  @Field(() => ID)
  id!: string;

  @Field({ description: 'User name' })
  name!: string;

  @Field(() => [BiTable])
  tables!: BiTable[];
}

@InputType()
export class CreateBiAppInput {
  @Field({ nullable: true })
  id?: string;
  @Field({ nullable: true })
  name?: string;
}
