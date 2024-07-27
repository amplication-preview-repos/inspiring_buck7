import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CookieService } from "./cookie.service";
import { CookieControllerBase } from "./base/cookie.controller.base";

@swagger.ApiTags("cookies")
@common.Controller("cookies")
export class CookieController extends CookieControllerBase {
  constructor(
    protected readonly service: CookieService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
