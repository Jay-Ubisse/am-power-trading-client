import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { Button } from "../ui/button";
import { useCart } from "@/contexts/cart-context";

export const CartItemCard = ({
  id,
  name,
  brand,
  imageUrl,
  price,
  quantity,
  subTotal,
}: CartItemsProps) => {
  const { removeFromCart } = useCart();
  return (
    <div className="border-t border-slate-200 mx-auto py-3">
      <div className="flex gap-2">
        <div className="h-16 w-16 overflow-hidden">
          <Image
            src={imageUrl}
            alt="m-pesa logo"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="relative text-slate-800 flex-1 flex justify-between">
          <div>
            <h2 className="font-medium text-sm">{name}</h2>
            <h3 className="text-xs mt-1">{brand}</h3>
          </div>
          <Button variant={"destructive"} size={"icon"}>
            <Trash
              size={16}
              weight="regular"
              onClick={() => removeFromCart(id)}
            />
          </Button>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="text-slate-800 text-sm">
          <p>
            <span className="font-medium">Preço:</span> {price} MT
          </p>
          <p>
            <span className="font-medium">Quantidade:</span> {quantity}
          </p>
        </div>
        <div>
          <h3 className="text-sm text-slate-800 font-medium">Subtotal</h3>
          <p className="text-slate-800 text-sm">{subTotal} MT</p>
        </div>
      </div>
    </div>
  );
};
