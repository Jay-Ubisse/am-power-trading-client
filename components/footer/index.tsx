import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import Image from "next/image";
import { FooterSection } from "./footer-section";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-primary-foreground flex flex-col gap-8 pt-7">
      <FooterSection
        title="Contacto"
        items={["vendas@site.co.mz", "(+258} 84 883 9501 / 87 702 7713"]}
        icons={[
          <Facebook key="1" />,
          <X key="2" />,
          <Instagram key="3" />,
          <YouTube key="4" />,
        ]}
      />
      <FooterSection
        title="Suporte ao cliente"
        items={["Contacte-nos", "Centro de Ajuda", "Sobre Nós"]}
      />
      <FooterSection
        title="Política"
        items={[
          "Envios e Devoluções",
          "Termos e Condições",
          "Métodos de Pagamentos",
          "FAQ",
        ]}
      />
      <hr className="h-[1px] w-[90%] mx-auto bg-muted my-6" />
      <section>
        <h4 className="text-slate-800 text-sm font-medium text-center">
          Aceitamos os seguintes métodos de pagamento
        </h4>
        <div className="flex justify-evenly my-4">
          <div className="h-14 w-14">
            <Image
              src={"/m-pesa.png"}
              alt="m-pesa logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="h-14 w-14">
            <Image
              src={"/e-mola.png"}
              alt="m-pesa logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="h-14 w-14">
            <Image
              src={"/visa.svg"}
              alt="m-pesa logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="h-14 w-14">
            <Image
              src={"/mastercard.svg"}
              alt="m-pesa logo"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-100 text-slate-800 text-center py-3 text-xs font-light">
        <p>&copy; {date.getFullYear()} AM Power Trading.</p>
      </section>
    </footer>
  );
};
