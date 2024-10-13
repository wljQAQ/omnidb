import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BiApp {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;
}
