import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { UserDto } from "../userManagement/UserDto";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Get("/users-count")
  @swagger.ApiOkResponse({
    type: Number
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CountUsers(
    @common.Body()
    body: UserDto
  ): Promise<number> {
        return this.service.CountUsers(body);
      }

  @common.Patch("/users/:id")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateUser(
    @common.Body()
    body: UserDto
  ): Promise<UserDto> {
        return this.service.UpdateUser(body);
      }
}
