import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBiAppInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
