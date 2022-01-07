import { ObjectType, Field } from "@nestjs/graphql";
import { ID } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly emailAddress: string;
  @Field()
  readonly password: string;
  @Field()
  readonly createdAt: Date;
  @Field()
  readonly phone: string;
  @Field()
  readonly type: string;
}