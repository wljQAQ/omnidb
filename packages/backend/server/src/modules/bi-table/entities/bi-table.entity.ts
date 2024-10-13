import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BiTable {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
