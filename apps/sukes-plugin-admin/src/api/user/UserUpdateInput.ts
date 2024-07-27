import { InputJsonValue } from "../../types";
import { AppModelUpdateManyWithoutUsersInput } from "./AppModelUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  apps?: AppModelUpdateManyWithoutUsersInput;
};
