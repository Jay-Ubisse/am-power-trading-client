"use client";

import { useCart } from "@/contexts/cart-context";
import { useEffect } from "react";

const PurchaseConfirmation = () => {
  let { cart } = useCart();

  useEffect(() => {
    cart.length = 0;
  });

  return <div>Pedido feito com sucesso!</div>;
};

export default PurchaseConfirmation;
