import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserType } from "./dtos/create-user.dto";
import { UserInput } from "./inputs/user.input";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [UserType])
  async users() {
    return this.usersService.findAll();
  }

  @Mutation(() => UserType)
  async createUser(@Args('input') input: UserInput) {
    return this.usersService.create(input);
  }
}