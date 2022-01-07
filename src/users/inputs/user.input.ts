import { Field, InputType, registerEnumType } from "@nestjs/graphql";

enum UserTypes {
  CUSTOMER,
  STUDIO
}

registerEnumType(UserTypes, {
  name: 'UserTypes',
});

@InputType()
export class UserInput {
  @Field()
  readonly name: string;
  @Field()
  readonly emailAddress: string;
  @Field()
  password: string;
  @Field()
  readonly phone: string;
  @Field(type => UserTypes)
  readonly type: UserTypes;
}