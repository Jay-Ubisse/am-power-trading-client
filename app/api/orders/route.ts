import { db } from "@/lib/db";

import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const url = new URL(req.url);

    const id = url.searchParams.get("orderId") as string;

    const order = await db.orders.findUnique({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { order: order, message: "Pedido obtido!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Ocorreu um erro ao obter pedido.", error },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const {
      custumerId,
      custumerName,
      custumerEmail,
      cellPhone,
      optionalCellPhone,
      neighborhood,
      avenue,
      addressInfo,
      cartItems,
    } = body;

    const newOrder = await db.orders.create({
      data: {
        custumerId,
        custumerName,
        custumerEmail,
        cellPhone,
        optionalCellPhone,
        neighborhood,
        avenue,
        addressInfo,
        products: JSON.stringify(cartItems),
        status: "pending",
      },
    });

    return NextResponse.json(
      { order: newOrder, message: "Pedido criado com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Ocorreu um erro." }, { status: 500 });
  }
}
