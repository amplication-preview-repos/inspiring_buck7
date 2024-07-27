import { InputJsonValue } from "../../types";
import { AppModelWhereUniqueInput } from "../appModel/AppModelWhereUniqueInput";

export type CookieUpdateInput = {
  data?: InputJsonValue;
  appField?: AppModelWhereUniqueInput | null;
};
