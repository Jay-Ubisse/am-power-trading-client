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
              : "border-transparent"
          }`}
        >
          Página inicial
        </Link>
      </li>
      <li>
        <Link
          href="store"
          className={`px-2 py-1 border-b ${
            currentPath === "/store"
              ? "text-primary border-primary rounded-md"
              : "border-transparent"
          }`}
        >
          Loja
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 ${
            currentPath === "/about"
              ? "text-primary bg-primary rounded-md"
              : "border-transparent"
          }`}
        >
          Sobre
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className={`px-2 py-1 border-b ${
            currentPath === "/contact"
              ? "text-primary border-primary rounded-md"
              : "border-transparent"
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
              : "border-transparent"
          }`}
        >
          FAQ
        </Link>
      </li>
    </ul>
  );
};
