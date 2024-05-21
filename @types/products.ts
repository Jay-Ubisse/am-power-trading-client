interface ProductsProps {
  id: number;
  name: string;
  price: number;
  brand: string;
  description: string;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  quantityInStock: number;
  quantitySold: number;
}

interface ProductCardProps {
  id: number;
  brand: string;
  imageUrl: string;
  name: string;
  category: string;
  description?: string;
  price: number;
}

interface CartItemsProps {
  id: number;
  name: string;
  imageUrl: string;
  brand: string;
  price: number;
  quantity: number;
  subTotal: number;
}

interface OrderProps {
  addressInfo: string;
  avenue: string;
  cellPhone: string;
  createdAt: string;
  custumerEmail: string;
  custumerId: number;
  custumerName: string;
  id: number;
  neighborhood: string;
  optionalCellPhone: string;
  products: string;
  status: string;
}
