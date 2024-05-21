"use client";

import { Icons } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import { InvoiceCard } from "@/components/invoice-card";
import { useSession } from "next-auth/react";
import { useCart } from "@/contexts/cart-context";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getOrder } from "@/services/orders";

const OrderDetails = ({ params }: { params: { id: string } }) => {
  let { cart } = useCart();
  const { data: session } = useSession();

  useEffect(() => {
    cart.length = 0;
  });

  const {
    isLoading,
    error,
    data: order,
    refetch,
  } = useQuery("order", () => getOrder({ orderId: params.id }));

  //console.log(JSON.parse(order?.data.order.products));

  if (isLoading)
    return (
      <div className="flex justify-between items-center px-4 py-2 w-full h-full">
        <Icons.spinner className="h-6 w-6 ml-[45%] animate-spin text-primary" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-between items-center bg-red-200 px-4 py-2">
        <p>Ocorreu um erro.</p>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={refetch as unknown as () => void}
        >
          Recarregar
        </Button>
      </div>
    );

  if (!order)
    return (
      <div className="flex justify-between items-center bg-yellow-200 px-4 py-2">
        <p>Pedido não encontrado</p>
        <Button
          variant={"outline"}
          size={"sm"}
          onClick={refetch as unknown as () => void}
        >
          Recarregar
        </Button>
      </div>
    );

  return (
    <div>
      <main className="w-fit mx-auto mt-10">
        <section className="mb-5 pb-5 border-b border-slate-300 text-slate-800">
          <h1 className="font-semibold text-xl">Pedido Feito com sucesso!</h1>
          <p>
            Olá, {session?.user.name}. Recebemos o seu pedido, entraremos em
            contacto em breve.
          </p>
        </section>
        <section>
          <InvoiceCard orderData={order.data.order} />
        </section>
      </main>
    </div>
  );
};

export default OrderDetails;
