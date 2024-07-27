import { SortOrder } from "../../util/SortOrder";

export type AppModelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  url?: SortOrder;
  userId?: SortOrder;
};
