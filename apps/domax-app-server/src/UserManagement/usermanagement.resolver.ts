import * as graphql from "@nestjs/graphql";
import { UserDto } from "../userManagement/UserDto";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Query(() => Number)
  async CountUsers(
    @graphql.Args()
    args: string
  ): Promise<number> {
    return this.service.CountUsers(args);
  }

  @graphql.Mutation(() => UserDto)
  async UpdateUser(
    @graphql.Args()
    args: UserDto
  ): Promise<UserDto> {
    return this.service.UpdateUser(args);
  }
}
