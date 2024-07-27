import { InputJsonValue } from "../../types";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type CookieCreateInput = {
  data?: InputJsonValue;
  appField?: AppModelWhereUniqueInput | null;
};
