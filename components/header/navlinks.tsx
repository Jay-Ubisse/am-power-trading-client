import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = () => {
  const currentPath = usePathname();

  return (
    <ul className="menu menu-horizontal mt-20 mx-auto my-5 lg:my-0 text-center flex flex-col lg:flex-row gap-6">
      <li>
        <Link
          href="/"
          className={`px-2 py-1 border-b ${
            currentPath === "/"
              ? "text-primary border-primary rounded-md"
              : "border-transparent lg:text-slate-800 hover:text-primary"
          }`}
        >
          Página inicial
        </Link>
      </li>
      <li>
        <Link
          href="/store"
          className={`px-2 py-1 border-b ${
            currentPath === "/store"
              ? "text-primary border-primary rounded-md"
              : "border-transparent lg:text-slate-800 hover:text-primary"
          }`}
        >
          Loja
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`px-2 py-1 border-b ${
            currentPath === "/about"
              ? "text-primary border-primary rounded-md"
              : "border-transparent lg:text-slate-800 hover:text-primary"
          }`}
        >
          Sobre
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={`px-2 py-1 border-b ${
            currentPath === "/contact"
              ? "text-primary border-primary rounded-md"
              : "border-transparent lg:text-slate-800 hover:text-primary"
          }`}
        >
          Contacto
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 border-b ${
            currentPath === "/faq"
              ? "text-primary border-primary rounded-md"
              : "border-transparent lg:text-slate-800 hover:text-primary"
          }`}
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
};
