"use client";

import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import { Slide } from "react-awesome-reveal";
import { getAllOrders } from "@/services/orders";
import { Icons } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import { Info, RefreshCw } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const MyOrders = () => {
  const { data: session } = useSession();

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () => getAllOrders());

  console.log(orders);

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

  if (!orders)
    return (
      <div className="flex justify-between items-center bg-yellow-200 px-4 py-2">
        <p>Nenhum produto encontrado</p>
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
    <div className="w-[80%] mx-auto mt-10">
      <div>
        <Slide direction="down">
          <h1 className="my-4 text-xl lg:text-4xl lg:text-primary text-slate-800 font-semibold">
            Meus Pedidos
          </h1>
        </Slide>
      </div>
      <div className="w-fit ml-auto">
        <Button
          variant={"default"}
          size={"sm"}
          onClick={refetch as unknown as () => void}
        >
          <RefreshCw size={18} />
          <span>Recarregar</span>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID do Pedido</TableHead>
            <TableHead>Nome do Cliente</TableHead>
            <TableHead>Email do Cliente</TableHead>
            <TableHead>Data de Criação do Pedido</TableHead>
            <TableHead>Estado do Pedido</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow key={order.id}>
                <TableCell className="text-center">{order.id}</TableCell>
                <TableCell className="text-center">
                  {order.custumerName}
                </TableCell>
                <TableCell className="text-center">
                  {order.custumerEmail}
                </TableCell>
                <TableCell className="text-center">{order.createdAt}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`${
                      order.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                    } text-white px-2 py-1 rounded-md`}
                  >
                    {order.status === "pending" ? "Pendente" : "Entregue"}
                  </span>
                </TableCell>
                <TableCell className="flex gap-2 items-center">
                  <Link href={"#"}>
                    <Button size={"sm"} className="flex gap-2 bg-green-500">
                      <Info size={20} />
                      <span>Ver detalhas</span>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default MyOrders;
