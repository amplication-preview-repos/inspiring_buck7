import { User } from "../user/User";
import { Cookie } from "../cookie/Cookie";

export type AppModel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  url: string | null;
  user?: User | null;
  cookies?: Array<Cookie>;
};
