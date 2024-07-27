import { JsonValue } from "type-fest";
import { AppModel } from "../appModel/AppModel";

export type Cookie = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  data: JsonValue;
  appField?: AppModel | null;
};
