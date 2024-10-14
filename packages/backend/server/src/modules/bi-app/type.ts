import { Field, ID, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType()
export class BiApp {
  @Field(() => ID)
  id!: string;

  // 添加其他字段...
}
