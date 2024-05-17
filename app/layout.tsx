import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { ReactHotToaster } from "@/providers/toaster";
import { CartProvider } from "@/contexts/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AM Power Trading",
  description: "Loja de venda de material de construcao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ReactQueryProvider>
          <CartProvider>
            <ReactHotToaster />
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
