import { InputJsonValue } from "../../types";
import { AppModelCreateNestedManyWithoutUsersInput } from "./AppModelCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  apps?: AppModelCreateNestedManyWithoutUsersInput;
};
