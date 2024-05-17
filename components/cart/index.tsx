import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LockIcon from "@mui/icons-material/Lock";

import { useCart } from "@/contexts/cart-context";
import { CartItemCard } from "@/components/cart-item-card";
import { BagSimple } from "@phosphor-icons/react";

export function Cart() {
  const { cart } = useCart();
  let total = 0;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center cursor-pointer hover:text-primary">
          <BagSimple size={28} />
          <span className="">{cart.length}</span>
        </div>
      </SheetTrigger>
      <SheetContent className="p-4 overflow-y-scroll">
        <SheetHeader>
          <SheetTitle>Minha Carrinha</SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? (
              <p>A sua carrinha está vazia. Adicione produtos à carrinha.</p>
            ) : (
              <p>
                Estes são os produtos adicionados à carrinha. Clique em Checkout
                para efectuar a compra.
              </p>
            )}
          </SheetDescription>
        </SheetHeader>
        <div className="my-5">
          {cart.map((cartItem) => {
            total += cartItem.subTotal;
            console.log(cartItem.id);
            return (
              <CartItemCard
                id={cartItem.id}
                key={cartItem.id}
                brand={cartItem.brand}
                imageUrl={cartItem.imageUrl}
                name={cartItem.name}
                price={Number(cartItem.price.toFixed(2))}
                quantity={cartItem.quantity}
                subTotal={Number(cartItem.subTotal.toFixed(2))}
              />
            );
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="w-full">
              <section className="border-y border-slate-300 py-3 mb-3 text-slate-800">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>{total} MT</p>
                </div>
                <div className="flex justify-between">
                  <p>Taxa de entrega</p>
                  <p>{0} MT</p>
                </div>
                <div className="flex justify-between font-semibold">
                  <h2>Total</h2>
                  <h2>{total} MT</h2>
                </div>
              </section>
              <section>
                <Button type="submit" className="w-full">
                  Checkout
                </Button>
                <div className="text-slate-800 text-xs flex justify-center items-center gap-2 mt-2">
                  <LockIcon style={{ fontSize: 10 }} />
                  <p>Compra segura</p>
                </div>
              </section>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
