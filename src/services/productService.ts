import { API_URL } from "@/constants/environment";

export const getAllProducts = async (limit: number = 20, skip: number = 0) => {
  return await (
    await fetch(`${API_URL}/products?skip=${skip}&limit=${limit}`)
  ).json();
};

export const getSingleProduct = async (id: number) => {
  return await (await fetch(`${API_URL}/products/${id}`)).json();
};
