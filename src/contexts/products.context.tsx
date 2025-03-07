import { createContext, ReactNode, useState, FC } from "react";
import PRODUCTS from "data/shop-data.json";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type ProductContextType = {
  products: Product[];
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
});

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
