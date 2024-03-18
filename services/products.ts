import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProducts(): Promise<ProductsProps[] | undefined> {
  try {
    const response = await axios.get<ProductsProps[]>(
      `${baseUrl}/api/products/all`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
