import { CreateBiTableInput } from './create-bi-table.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBiTableInput extends PartialType(CreateBiTableInput) {
  @Field(() => Int)
  id: number;
}
