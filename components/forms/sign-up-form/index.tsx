"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

const formSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z.string().min(1, "O e-mail é obrigatório").email("Email inválido"),
    password: z
      .string()
      .min(1, "A palavra-passe é obrigatória")
      .min(8, "A palavra-passe deve ter 8 caracteres no mínimo")
      .max(16, "A palavra-passe deve der entre 8 a 16 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "A confirmação da palavra-passe é necessária"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "A palavra-passe não é a mesma",
  });

export const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Criando usuário...", { id: "1" });
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      toast.success("Conta criada com sucesso.", { id: "1" });
      router.push("/sign-in");
    } else {
      toast.error("Ocorreu um erro. Tente novamente.", { id: "1" });
    }
  }

  return (
    <div className="shrink-0 w-full max-w-sm shadow-2xl bg-secondary rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="p-6 flex flex-col gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palavra-Passe</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite a palavra-passe"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme a palavra-passe</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Confirme a palavra-passe"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <p className="text-slate-800 text-sm">
                Ja tem uma conta?{" "}
                <Link href={"/sign-in"} className="underline">
                  Clique aqui
                </Link>{" "}
                para entrar.
              </p>
            </div>
            <div className="w-fit ml-auto mt-4">
              <Button type="submit">Cadastrar</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
