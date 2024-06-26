import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const brands = [
  {
    id: "INV001",
    logo: "LOGO MARCA 1",
  },
  {
    id: "INV002",
    logo: "LOGO MARCA 2",
  },
  {
    id: "INV003",
    logo: "LOGO MARCA 3",
  },
  {
    id: "INV004",
    logo: "LOGO MARCA 4",
  },
  {
    id: "INV005",
    logo: "LOGO MARCA 5",
  },
];

export function BrandsTable() {
  return (
    <Table>
      <TableCaption className="text-sm font-light">
        Lista das marcas que nós confiamos.
      </TableCaption>
      <TableBody className="block lg:hidden">
        {brands.map((brand) => (
          <TableRow key={brand.id} className="text-center ">
            <TableCell className="font-medium text-xl text-slate-500">
              {brand.logo}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableBody className="hidden lg:block w-fit mx-auto">
        <TableRow className="text-center">
          {brands.map((brand) => (
            <TableCell
              key={brand.id}
              className="font-medium text-xl text-slate-500 border border-slate-500 py-10"
            >
              {brand.logo}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
