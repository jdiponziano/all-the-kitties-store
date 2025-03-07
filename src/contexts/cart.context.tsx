import { FC, createContext, useState, useMemo } from "react";
import { ProductDataProps } from "data/categories";

export type CartItemProps = ProductDataProps & {
  quantity: number;
};

type CartContextProps = {
  isOpen: boolean;
  toggleCart: () => void;
  cartCount: number;
  cartItems: CartItemProps[];
  addToCart: (item: ProductDataProps) => void;
};

export const addCartItem = (
  cartItems: CartItemProps[],
  productToAdd: ProductDataProps
): CartItemProps[] => {
  const existingCardItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (!!existingCardItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [
      ...cartItems,
      {
        ...productToAdd,
        quantity: 1,
      },
    ];
  }
};

export const CartContext = createContext<CartContextProps>({
  isOpen: false,
  toggleCart: () => {
    console.warn("toggleCart is not implemented");
  },
  cartCount: 0,
  cartItems: [],
  addToCart: () => {
    console.warn("addToCart is not implemented");
  },
  // removeItem: (item: any) => {},
  // deleteItem: (item: any) => {},
  // clearCart: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const addToCart = (productToAdd: ProductDataProps) =>
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const value = {
    isOpen,
    toggleCart: () => setIsOpen(!isOpen),
    cartCount,
    addToCart,
    cartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
