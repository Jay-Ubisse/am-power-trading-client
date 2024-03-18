"use client";

import { Advantages } from "@/components/advantages";
import { BrandsTable } from "@/components/brands";
import { CategoryCarousel } from "@/components/category-carousel";
import { Newsletter } from "@/components/newsletter";
import { ProductsCarousel } from "@/components/products-carousel";
import { SearchBar } from "@/components/search-bar";
import { CarouselPlugin } from "@/components/slideshow-carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className="bg-slate-100">
      <section>
        <CarouselPlugin />
      </section>
      <section className="max-w-[80%] mx-auto relative -top-4">
        <SearchBar />
      </section>
      <section className="bg-white mx-2 rounded-xl p-5">
        <Advantages />
      </section>
      <section className="bg-white my-4 p-1 pb-3">
        <Slide direction="down">
          <h1 className="my-4 text-xl text-slate-800 text-center font-semibold">
            Mais Vendidos
          </h1>
        </Slide>

        <ProductsCarousel />

        <div className="w-fit mx-auto mt-4">
          <Link href="/store">
            <Button>Ver Todos os Produtos</Button>
          </Link>
        </div>
      </section>
      <section className="bg-white my-4 p-1">
        <Slide direction="down">
          <h1 className="my-4 text-xl text-slate-800 text-center font-semibold">
            Compre por Categoria
          </h1>
        </Slide>

        <CategoryCarousel />
      </section>
      <section
        className="my-4 bg-cover h-[25rem]"
        style={{ backgroundImage: "url('/toolkit.jpeg')" }}
      >
        <div className="w-full h-full bg-gradient-to-b from-primary to-transparent p-2 px-4">
          <p className="text-primary bg-primary-foreground px-2 py-1 rounded w-fit mt-4 text-sm font-light">
            Oferta do dia
          </p>
          <h3 className="mt-5 mb-2 text-white font-semibold text-4xl">
            <span className="block text-5xl">30%</span> <span>DE DESCONTO</span>
          </h3>
          <p className="text-white text-base font-semibold">
            Kit completo de ferramentas de Eletricidade
          </p>
          <div className="mt-2">
            <p className="text-sm font-light text-white mb-5">
              Quantidades limitadas.
            </p>
            <Link href="#">
              <Button>Comprar Agora</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white my-4 p-1">
        <Slide direction="down">
          <h1 className="my-4 text-xl text-slate-800 text-center font-semibold">
            Marcas
          </h1>
        </Slide>

        <BrandsTable />
      </section>
      <section className="bg-primary mt-4 p-1 pb-7">
        <Slide direction="down">
          <h1 className="my-4 text-xl text-primary-foreground text-center font-semibold">
            Boletim de Notícias
          </h1>
        </Slide>

        <div className="w-[90%] mx-auto">
          <Newsletter />
        </div>
      </section>
      <section className="bg-cyan-950 mb-4 p-1 pb-7 text-white">
        <div className="text-center w-[80%] mx-auto font-light">
          <h3 className="mt-7 text-2xl">
            Precisa de ajuda? Consulte a nossa Central de Ajuda
          </h3>
          <p className="mt-5 text-base">
            Estamos disponível para si 24 horas por dia, 7 dias por semana.
          </p>
        </div>
        <div className="w-fit mx-auto mt-10">
          <Link href="#">
            <Button>Ir Para a Central de Ajuda</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
