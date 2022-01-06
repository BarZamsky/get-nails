import { ID, ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly phone: string;
}