import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const products = [
  {
    id: 1,
    imageUrl: "",
    name: "Nome do Produto 1",
    category: "Categoria do Produto 1",
    price: 1230.67,
  },
  {
    id: 2,
    imageUrl: "",
    name: "Nome do Produto 2",
    category: "Categoria do Produto 2",
    price: 1230.67,
  },
  {
    id: 3,
    imageUrl: "",
    name: "Nome do Produto 3",
    category: "Categoria do Produto 3",
    price: 1230.67,
  },
  {
    id: 4,
    imageUrl: "",
    name: "Nome do Produto 4",
    category: "Categoria do Produto 4",
    price: 1230.67,
  },
];

export function ProductsCarousel() {
  return (
    <Carousel className="w-[70%] lg:w-[80%] mx-auto">
      <CarouselPrevious />
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col p-3 justify-center">
                  <figure className="bg-green-800 w-[90%] text-white my-2 h-40 rounded-md mx-auto flex justify-center items-center">
                    IMAGEM DO PRODUTO
                  </figure>
                  <div className="text-slate-800 text-center">
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-xs">{product.category}</p>
                    <p className="my-3">{`${product.price} MT`}</p>
                  </div>
                  <div className="w-fit mx-auto mt-4">
                    <Link href="#">
                      <Button variant="outline">Adicionar a Carrinha</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
