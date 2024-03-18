import { ProductQuantity } from "@/components/product-quantity";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CloseIcon from "@mui/icons-material/Close";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LockIcon from "@mui/icons-material/Lock";
import Image from "next/image";

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <LocalMallIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Minha Carrinha</SheetTitle>
          <SheetDescription>
            Estes são os produtos adicionados à carrinha. Clique em Checkout
            para efectuar a compra.
          </SheetDescription>
        </SheetHeader>
        <div className="my-5">
          <div className="border-t border-slate-200 mx-auto py-3">
            <div className="flex gap-2">
              <div className="h-16 w-16">
                <Image
                  src={"/macbook-pro.jpg"}
                  alt="m-pesa logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="relative text-slate-800 flex-1 flex justify-between">
                <div>
                  <h2 className="font-medium text-sm">Macbook Pro 2021 M2</h2>
                  <h3 className="text-xs mt-1">256GB SSD 16GB RAM</h3>
                </div>
                <CloseIcon style={{ fontSize: 20 }} />
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <ProductQuantity />
              <p className="text-slate-800 font-medium text-sm">1240.00 MT</p>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <div className="w-full">
              <Button type="submit" className="w-full">
                Checkout
              </Button>
              <div className="text-slate-800 text-xs flex justify-center items-center gap-2 mt-2">
                <LockIcon style={{ fontSize: 10 }} />
                <p>Compra segura</p>
              </div>
            </div>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
