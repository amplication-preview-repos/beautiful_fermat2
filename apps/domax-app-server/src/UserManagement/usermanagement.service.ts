import { Injectable } from "@nestjs/common";
import { UserDto } from "../userManagement/UserDto";

@Injectable()
export class UserManagementService {
  constructor() {}
  async CountUsers(args: string): Promise<number> {
    throw new Error("Not implemented");
  }
  async UpdateUser(args: UserDto): Promise<UserDto> {
    throw new Error("Not implemented");
  }
}
