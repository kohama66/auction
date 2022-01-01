import { AxiosResponse } from "axios";
import api from "./index";

export const getProducts = async (): Promise<AxiosResponse> => {
  const response = await api.get(`auctions/1/products`);
  return response;
};
