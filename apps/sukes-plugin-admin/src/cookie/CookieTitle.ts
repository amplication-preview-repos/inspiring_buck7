import { Cookie as TCookie } from "../api/cookie/Cookie";

export const COOKIE_TITLE_FIELD = "id";

export const CookieTitle = (record: TCookie): string => {
  return record.id?.toString() || String(record.id);
};
