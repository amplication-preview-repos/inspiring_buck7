import { CookieWhereInput } from "./CookieWhereInput";
import { CookieOrderByInput } from "./CookieOrderByInput";

export type CookieFindManyArgs = {
  where?: CookieWhereInput;
  orderBy?: Array<CookieOrderByInput>;
  skip?: number;
  take?: number;
};
