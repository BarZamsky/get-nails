import { ArgsType } from "@nestjs/graphql";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  readonly name: string;
  @Field()
  readonly phone: string;
}