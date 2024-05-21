"use client";

import { PurchaseDetailsForm } from "@/components/forms/purchase-details-form";
import { useCart } from "@/contexts/cart-context";

const PurchaseDetails = () => {
  const { cart } = useCart();
  let total = 0;
  return (
    <div className="min-h-screen">
      <div className="flex justify-evenly mt-5">
        <main className="w-[50%]">
          <h1 className="text-slate-800 text-2xl mb-2 font-semibold">
            Informação de Endereço
          </h1>
          <PurchaseDetailsForm />
        </main>
        <aside className="w-[29%]">
          <h1 className="text-slate-800 text-xl font-semibold">
            Resumo do Pedido
          </h1>
          <section>
            {cart.map((cartItem) => {
              total += cartItem.subTotal;
              return (
                <div
                  key={cartItem.id}
                  className="flex justify-between text-slate-800 my-2 border-t-[1px] border-slate-800 py-2"
                >
                  <div>
                    <h2 className="font-medium">{cartItem.name}</h2>
                    <h3 className="text-sm">
                      Preço: {cartItem.price.toFixed(2)}
                    </h3>
                    <h3 className="text-sm">Quantidade: {cartItem.quantity}</h3>
                  </div>
                  <div>
                    <h3>{cartItem.subTotal.toFixed(2)} MT</h3>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="border-y-2 border-slate-300 py-5 mt-5 text-slate-800">
            <div className="flex justify-between font-medium">
              <p>Subtotal</p>
              <p>{total.toFixed(2)} MT</p>
            </div>
            <div className="flex justify-between font-medium">
              <p>Envio</p>
              <p>{0} MT</p>
            </div>
          </section>
          <div className="flex justify-between font-semibold text-lg text-slate-800 my-7">
            <h2>Total</h2>
            <h2>{total.toFixed(2)} MT</h2>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PurchaseDetails;
