import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "react-query";
import { getProducts } from "@/services/products";
import { Icons } from "@/components/loading-spinner";
import { ProductCard } from "../product-card";

export function ProductsCarousel() {
  const {
    isLoading,
    error,
    data: productsData,
    refetch,
  } = useQuery("products", () => getProducts());

  if (isLoading)
    return (
      <>
        <div className="flex justify-between items-center px-4 py-2 w-full h-full">
          <Icons.spinner className="h-6 w-6 ml-[45%] animate-spin text-primary" />
        </div>
      </>
    );

  if (error)
    return (
      <>
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
      </>
    );

  if (!productsData || productsData.length == 0 || productsData.length < 0)
    return (
      <>
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
      </>
    );

  return (
    <Carousel className="w-[70%] lg:w-[80%] mx-auto">
      <CarouselPrevious />
      <CarouselContent>
        {productsData.map((product) => (
          <CarouselItem key={product.id} className="lg:basis-1/4">
            <div className="p-1">
              <ProductCard
                id={product.id}
                brand={product.brand}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                category={product.category}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
