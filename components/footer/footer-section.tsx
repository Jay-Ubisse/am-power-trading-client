import Link from "next/link";

interface linkProps {
  label: string;
  url: string;
}

interface FooterSectionProps {
  title: string;
  links: linkProps[];
  icons?: React.ReactNode[];
}

export const FooterSection = ({ title, links, icons }: FooterSectionProps) => {
  return (
    <div>
      <h3 className="text-slate-800 font-xl font-medium mb-3 text-center text-xl">
        {title}
      </h3>
      <ul className="text-slate-500 font-light flex flex-col gap-1 text-center">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-3 justify-center mt-3 text-slate-800">
        {icons?.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    </div>
  );
};
