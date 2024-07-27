import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CookieServiceBase } from "./base/cookie.service.base";

@Injectable()
export class CookieService extends CookieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
