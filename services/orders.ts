import axios, { AxiosResponse } from "axios";

export async function createOrder({
  custumerName,
  custumerEmail,
  cellPhone,
  optionalCellPhone,
  neighborhood,
  addressInfo,
  cartItems,
}: {
  custumerName: string | undefined;
  custumerEmail: string | undefined;
  cellPhone: string;
  optionalCellPhone: string;
  neighborhood: string;
  addressInfo: string;
  cartItems: CartItemsProps[];
}): Promise<AxiosResponse<any, any> | undefined> {
  const orderData = {
    custumerName,
    custumerEmail,
    cellPhone,
    optionalCellPhone,
    neighborhood,
    addressInfo,
    cartItems,
  };

  console.log(orderData);
  const response = await axios.post("/api/orders", orderData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
