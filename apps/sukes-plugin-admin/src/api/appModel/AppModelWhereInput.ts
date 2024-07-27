import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CookieListRelationFilter } from "../cookie/CookieListRelationFilter";

export type AppModelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  cookies?: CookieListRelationFilter;
};
