import axios, { AxiosResponse } from "axios";

export async function createOrder({
  custumerId,
  custumerName,
  custumerEmail,
  cellPhone,
  optionalCellPhone,
  neighborhood,
  avenue,
  addressInfo,
  cartItems,
}: {
  custumerId: number | undefined;
  custumerName: string | undefined;
  custumerEmail: string | undefined;
  cellPhone: string;
  optionalCellPhone: string;
  neighborhood: string;
  avenue: string;
  addressInfo: string;
  cartItems: CartItemsProps[];
}): Promise<AxiosResponse<any, any> | undefined> {
  const orderData = {
    custumerId,
    custumerName,
    custumerEmail,
    cellPhone,
    optionalCellPhone,
    neighborhood,
    avenue,
    addressInfo,
    cartItems,
  };

  //console.log(orderData);
  const response = await axios.post("/api/orders", orderData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}
