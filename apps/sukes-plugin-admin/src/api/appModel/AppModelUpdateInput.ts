import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CookieUpdateManyWithoutAppModelsInput } from "./CookieUpdateManyWithoutAppModelsInput";

export type AppModelUpdateInput = {
  name?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  cookies?: CookieUpdateManyWithoutAppModelsInput;
};
