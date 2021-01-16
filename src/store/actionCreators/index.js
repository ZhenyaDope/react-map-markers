import { STORE_DATA } from "../constants";

export const storeData = (data) => ({
  type: STORE_DATA,
  payload: data,
});
