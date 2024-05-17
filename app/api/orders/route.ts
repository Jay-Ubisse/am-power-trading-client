import { db } from "@/lib/db";

import { NextResponse } from "next/server";

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
