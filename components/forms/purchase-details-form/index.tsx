"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createOrder } from "@/services/orders";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  cellPhone: z.string().min(1, "O celular é obrigatório"),
  optionalCellPhone: z.string(),
  neighborhood: z.string().min(1, "O bairro é obrigatório"),
  avenue: z.string().min(1, "A rua/avenida é obrigatória"),
  addressInfo: z.string(),
});

export function PurchaseDetailsForm() {
  const { cart } = useCart();
  const router = useRouter();
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cellPhone: "",
      optionalCellPhone: "",
      neighborhood: "",
      avenue: "",
      addressInfo: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Processando pedido...", { id: "1" });
    try {
      const productsData = {
        custumerId: Number(session?.user.id),
        custumerName: session?.user.name,
        custumerEmail: session?.user.email,
        cellPhone: values.cellPhone,
        optionalCellPhone: values.optionalCellPhone,
        neighborhood: values.neighborhood,
        avenue: values.avenue,
        addressInfo: values.addressInfo,
        cartItems: cart,
      };

      const response = await createOrder(productsData);
      //console.log(response);
      if (response!.status === 201) {
        toast.success(response!.data.message, { id: "1" });
        router.push("/orders/purchase-confirmation");
      } else {
        toast.error(response!.data.message, { id: "1" });
      }
    } catch (error) {
      toast.error("Ocorreu um erro. Tente de novo.", { id: "1" });
      console.error("Error saving product:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 bg-transparent"
      >
        <div className="space-y-4">
          <div className="flex justify-between w-full gap-5 text-slate-800">
            <FormField
              control={form.control}
              name="cellPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-72 text-slate-800 hover:border-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="optionalCellPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular secundário (Opcional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-72 text-slate-800 hover:border-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full justify-between gap-5 text-slate-800">
            <FormField
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bairro</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-72 text-slate-800 hover:border-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avenue"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Avenida/Rua</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-72 text-slate-800 hover:border-primary focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="addressInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-800">
                  Informação de endereço adicional (opcional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none text-slate-800 hover:border-primary focus:border-primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="ml-auto w-fit flex gap-2">
            <Link
              href={"/cart"}
              className="bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 rounded-md font-medium"
            >
              Cancelar
            </Link>
            <Button type="submit">Confirmar</Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
