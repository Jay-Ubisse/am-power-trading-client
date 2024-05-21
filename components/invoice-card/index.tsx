import { OrderProps } from "@/@types/products";
import { Footnote, PageBottom, Tailwind } from "@onedoc/react-print";

export const InvoiceCard = ({ orderData }: { orderData: OrderProps }) => {
  const products = JSON.parse(orderData.products);
  let total = 0;

  return (
    <Tailwind>
      <div className="w-a4 h-a4">
        <div className="flex justify-between items-end pb-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold">Pedido #{orderData.id}</h1>
            <p className="text-xs">{orderData.createdAt}</p>
          </div>
          <h1 className="border-slate-800 text-slate-800 mr-1 text-6xl py-1 font-medium border-2 px-2">
            LOGO
          </h1>
        </div>

        <div className="text-right">
          <p className="p-0 mb-1">
            <b>Am Power Trading, Lda</b>
          </p>
          <p className="p-0 mb-1">Rua da Costa do Sol, 46 R/C</p>
          <p className="p-0 mb-1">Bairro da Costa do Sol</p>
          <p className="p-0 mb-1">Maputo - Moçambique</p>
        </div>

        <div className="h-px bg-gray-300 my-4" />

        <div>
          <p className="p-0 mb-1">
            <b>Factura Para:</b>
          </p>
          <p className="p-0 mb-1">{orderData.custumerName}</p>
          <p className="p-0 mb-1">{orderData.custumerEmail}</p>
          <p className="p-0 mb-1">
            {orderData.cellPhone}{" "}
            {orderData.optionalCellPhone
              ? `/ ${orderData.optionalCellPhone}`
              : ""}
          </p>
          <p className="p-0 mb-1">{orderData.neighborhood}</p>
          <p className="p-0 mb-1">{orderData.avenue}</p>
        </div>

        <div className="h-px bg-gray-300 my-4" />

        <p className="p-0 leading-5">
          O pagamento deverá ser feito no prazo de 15 dias após o recebimento
          desta fatura. <Footnote>Isso inclui dias não úteis.</Footnote>
        </p>

        <table className="w-full my-12">
          <tr className="border-b border-gray-300">
            <th className="text-left font-bold py-2">Item</th>
            <th className="text-left font-bold py-2">Descrição</th>
            <th className="text-left font-bold py-2">Preço unitário</th>
            <th className="text-left font-bold py-2">Quantidade</th>
            <th className="text-left font-bold py-2">Valor</th>
          </tr>

          {products.map((product: any, index: any) => {
            total += product.subTotal;
            return (
              <tr key={product.id}>
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{product.name}</td>
                <td className="py-2">{product.price} MT</td>
                <td className="py-2">{product.quantity}</td>
                <td className="py-2 text-right pr-1">{product.subTotal} MT</td>
              </tr>
            );
          })}

          <tr className="border-b border-gray-300">
            <th className="text-left font-bold py-2"></th>
            <th className="text-left font-bold py-2">Total</th>
            <th className="text-left font-bold py-2"></th>
            <th className="text-left font-bold py-2"></th>
            <th className="font-bold py-2 text-right pr-1">{total} MT</th>
          </tr>
        </table>

        <div className="bg-blue-100 p-3 rounded-md border-blue-300 text-blue-800 text-sm">
          AGRADEÇEMOS PELA SUA CONFIANÇA!
        </div>

        <PageBottom>
          <div className="h-px bg-gray-300 my-4" />
          <div className="text-gray-400 text-sm">Pedido #{orderData.id}</div>
        </PageBottom>
      </div>
    </Tailwind>
  );
};
