import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type CookieWhereInput = {
  id?: StringFilter;
  data?: JsonFilter;
  appField?: AppModelWhereUniqueInput;
};
