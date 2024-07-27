import { SortOrder } from "../../util/SortOrder";

export type CookieOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  data?: SortOrder;
  appFieldId?: SortOrder;
};
