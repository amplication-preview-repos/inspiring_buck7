import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CookieModuleBase } from "./base/cookie.module.base";
import { CookieService } from "./cookie.service";
import { CookieController } from "./cookie.controller";
import { CookieResolver } from "./cookie.resolver";

@Module({
  imports: [CookieModuleBase, forwardRef(() => AuthModule)],
  controllers: [CookieController],
  providers: [CookieService, CookieResolver],
  exports: [CookieService],
})
export class CookieModule {}
