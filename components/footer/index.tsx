import { Facebook, Instagram, X, YouTube } from "@mui/icons-material";
import Image from "next/image";
import { FooterSection } from "./footer-section";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-primary-foreground flex flex-col pt-7">
      <div className="flex flex-col lg:flex-row lg:justify-evenly gap-8">
        <FooterSection
          title="Contacto"
          links={[
            {
              label: "vendas@site.co.mz",
              url: "malito:vendas@site.co.mz",
            },
            {
              label: "(+258} 84 883 9501 / 87 702 7713",
              url: "#",
            },
          ]}
          icons={[
            <Facebook key="1" />,
            <X key="2" />,
            <Instagram key="3" />,
            <YouTube key="4" />,
          ]}
        />
        <FooterSection
          title="Suporte ao cliente"
          links={[
            {
              label: "Contacte-nos",
              url: "/contact",
            },
            {
              label: "Centro de Ajuda",
              url: "https://wa.me/258848839501",
            },
            {
              label: "Sobre Nós",
              url: "/about",
            },
          ]}
        />
        <FooterSection
          title="Política"
          links={[
            {
              label: "Envios e Devoluções",
              url: "#",
            },
            {
              label: "Termos e Condições",
              url: "#",
            },
            {
              label: "Métodos de Pagamentos",
              url: "#",
            },
            {
              label: "FAQ",
              url: "#",
            },
          ]}
        />
      </div>
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
        <p>
          &copy; {date.getFullYear()} AM Power Trading. Todos os direitos
          reservados
        </p>
      </section>
    </footer>
  );
};
