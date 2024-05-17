import axios from "axios";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProducts(): Promise<ProductsProps[] | undefined> {
  const params = {
    filter: "all",
    value: "",
  };
  try {
    const response = await axios.get<ProductsProps[]>(
      `${baseUrl}/api/products`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
