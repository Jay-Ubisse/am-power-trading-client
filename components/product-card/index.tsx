import Image from "next/image";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import toast from "react-hot-toast";

export const ProductCard = ({
  id,
  brand,
  imageUrl,
  name,
  category,
  price,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  function handleDecrement() {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleChange() {
    console.log(quantity);
  }

  function handleAddToCart({
    id,
    brand,
    imageUrl,
    name,
    price,
    quantity,
  }: {
    id: number;
    brand: string;
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
  }) {
    const subTotal = quantity * price;
    const cartItemData: CartItemsProps = {
      id,
      brand,
      imageUrl,
      name,
      price,
      quantity,
      subTotal,
    };
    addToCart(cartItemData);
    toast.success("Produto adicionado à carrinha!");
  }

  return (
    <Card className="min-h-[20rem] relative">
      <CardHeader className="p-3 text-center">
        <div className="w-full h-[8rem]">
          <Image
            src={imageUrl}
            alt="Product Image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            className="mx-auto"
          />
        </div>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{category}</CardDescription>
        <div className="text-primary font-medium mb-5">{`${price} MT`}</div>
      </CardHeader>
      <CardContent className="p-3 absolute bottom-3 w-full">
        <div className="border border-slate-800 w-fit mx-auto mb-2 px-2">
          <span onClick={handleDecrement} className="font-light cursor-pointer">
            -
          </span>
          <input
            type="text"
            value={quantity}
            onChange={handleChange}
            className="focus:outline-none text-center w-12"
          />
          <span onClick={handleIncrement} className="font-light cursor-pointer">
            +
          </span>
        </div>
        <div className="w-fit mx-auto">
          <Button
            size={"sm"}
            onClick={() =>
              handleAddToCart({
                id,
                brand,
                imageUrl,
                name,
                price,
                quantity,
              })
            }
          >
            Adicionar à carrinha
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
