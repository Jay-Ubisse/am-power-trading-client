import { db } from "@/lib/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const session = await getServerSession(authOption);
  try {
    const id = session?.user.id as string;

    const orders = await db.orders.findMany({
      where: {
        custumerId: Number(id),
      },
    });
    return NextResponse.json(
      { orders: orders, message: "Pedidos obtidos!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Ocorreu um erro ao obter pedido.", error },
      { status: 500 }
    );
  }
};
