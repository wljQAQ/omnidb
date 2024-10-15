import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BiTable {
  @Field(() => ID)
  id!: string;

  @Field({ description: 'User name' })
  name!: string;

  @Field({ description: 'BiApp Id' })
  biAppId!: string;
  // 添加其他字段...
}

@InputType()
export class CreateBiTableInput {
  @Field()
  biAppId: string;
  @Field()
  name: string;
}
