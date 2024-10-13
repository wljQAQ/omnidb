import { CreateBiAppInput } from './create-bi-app.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBiAppInput extends PartialType(CreateBiAppInput) {
  @Field(() => Int)
  id: number;
}
