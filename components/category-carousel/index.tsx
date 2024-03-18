import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categories = [
  {
    imageUrl: "",
    name: "Categoria A",
  },
  {
    imageUrl: "",
    name: "Categoria B",
  },
  {
    imageUrl: "",
    name: "Categoria C",
  },
  {
    imageUrl: "",
    name: "Categoria D",
  },
];
export function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      orientation="vertical"
      className="w-[70%] mx-auto my-24"
    >
      <CarouselContent className="h-[300px]">
        {categories.map((category, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-center p-6">
                  <figure className="bg-green-800 w-40 h-40 rounded-[50%] text-white my-2 mx-auto text-center flex justify-center items-center">
                    IMAGEM DA CATEGORIA
                  </figure>
                  <div className="text-slate-800 text-center">
                    <p className="text-base font-semibold">{category.name}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
