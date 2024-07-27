import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CookieCreateNestedManyWithoutAppModelsInput } from "./CookieCreateNestedManyWithoutAppModelsInput";

export type AppModelCreateInput = {
  name?: string | null;
  url?: string | null;
  user?: UserWhereUniqueInput | null;
  cookies?: CookieCreateNestedManyWithoutAppModelsInput;
};
