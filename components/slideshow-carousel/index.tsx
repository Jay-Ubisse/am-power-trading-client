"use client";

import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const backgroundImagesUrls = [
    "/main-background.jpg",
    "/main-background-2.jpg",
    "/main-background-3.jpg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {backgroundImagesUrls.map((backgroundImagesUrl, index) => (
          <CarouselItem key={index}>
            <div
              className="h-[20rem] lg:h-[25rem] bg-cover rounded-bl-[2rem] rounded-br-[2rem] flex overflow-hidden -z-40"
              style={{ backgroundImage: `url(${backgroundImagesUrl})` }}
            >
              <div className="w-full h-full bg-slate-900/50 flex items-center justify-center">
                <div className="max-w-[80%] mx-auto text-center">
                  <h1 className="text-primary-foreground text-2xl lg:text-4xl lg:font-semibold lg:w-1/2 lg:mx-auto lg:text-center">
                    Preços Incríveis Para Todos os Seus Produtos Favoritos.
                  </h1>
                  <p className="text-primary-foreground mt-2 mb-5 font-light lg:text-xl lg:font-normal">
                    Compre mais e page menos.
                  </p>

                  <Link href="#">
                    <Button>Comprar Agora</Button>
                  </Link>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
