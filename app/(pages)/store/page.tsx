"use client";

import { FilterSideBar } from "@/components/filter-sidebar";
import { HeaderBackground } from "@/components/header-background";
import { Icons } from "@/components/loading-spinner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getProducts } from "@/services/products";
import { useQuery } from "react-query";
import Image from "next/image";
import { ProductQuantity } from "@/components/product-quantity";
import { ProductCard } from "@/components/product-card";

const Store = () => {
  const {
    isLoading,
    error,
    data: productsData,
    refetch,
  } = useQuery("products", () => getProducts());

  if (isLoading)
    return (
      <>
        <HeaderBackground />
        <div className="flex justify-between items-center px-4 py-2 w-full h-full">
          <Icons.spinner className="h-6 w-6 ml-[45%] animate-spin text-primary" />
        </div>
      </>
    );

  if (error)
    return (
      <>
        <HeaderBackground />
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
        <HeaderBackground />
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
    <div className="bg-slate-100 min-h-screen pb-10">
      <HeaderBackground />
      <div className="mt-5 text-slate-800 px-4">
        <div className="flex justify-between items-center">
          <h1 className="mb-5 text-2xl font-medium">Todos os produtos</h1>
          <div className="bg-slate-200 p-2 rounded-md">
            <FilterSideBar />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3 text-slate-800">
          {productsData.map((product) => (
            <div key={product.id}>
              <ProductCard
                id={product.id}
                brand={product.brand}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;
