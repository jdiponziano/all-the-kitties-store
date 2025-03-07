import { FC, createContext, useState } from "react";

type CartContextProps = {
  isOpen: boolean;
  toggleCart?: () => void;
  itemCount: number;
};

export const CartContext = createContext<CartContextProps>({
  isOpen: false,
  itemCount: 0,
  // addItem: (item: any) => {},
  // removeItem: (item: any) => {},
  // deleteItem: (item: any) => {},
  // clearCart: () => {},
  // cartItems: [],
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    isOpen,
    toggleCart: () => setIsOpen(!isOpen),
    itemCount: 0,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
