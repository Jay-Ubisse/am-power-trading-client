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

export async function getOrder({
  orderId,
}: {
  orderId: string;
}): Promise<AxiosResponse<any, any> | undefined> {
  //console.log(data);

  const params = {
    orderId,
  };
  try {
    const response = await axios.get(`/api/orders/`, { params });
    return response;
  } catch (error) {
    console.log(error);
  }
}
