import { JsonValue } from "type-fest";
import { AppModel } from "../appModel/AppModel";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  apps?: Array<AppModel>;
};
