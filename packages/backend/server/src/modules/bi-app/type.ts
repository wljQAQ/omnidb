import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BiApp {
  @Field(() => ID)
  id!: string;

  @Field({ description: 'User name' })
  name!: string;
  // 添加其他字段...
}

@InputType()
export class CreateBiAppInput {
  @Field({ nullable: true })
  name?: string;
}
