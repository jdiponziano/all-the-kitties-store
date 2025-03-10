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
  cartTotalPrice: number;
  addToCart: (item: ProductDataProps) => void;
  removeFromCart: (item: CartItemProps) => void;
  clearCartItem: (item: CartItemProps) => void;
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

export const removeCartItem = (
  cartItems: CartItemProps[],
  productToRemove: CartItemProps
) => {
  const existingCardItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );
  if (existingCardItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
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
  removeFromCart: () => {
    console.warn("removeFromCart is not implemented");
  },
  clearCartItem: () => {
    console.warn("deleteFromCart is not implemented");
  },
  cartTotalPrice: 0,
});

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const addToCart = (productToAdd: ProductDataProps) =>
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));

  const removeFromCart = (productToRemove: CartItemProps) =>
    setCartItems((prevCartItems) =>
      removeCartItem(prevCartItems, productToRemove)
    );

  const clearCartItem = (cartItemToClear: CartItemProps) =>
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== cartItemToClear.id)
    );

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  const cartTotalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  const value = {
    isOpen,
    toggleCart: () => setIsOpen(!isOpen),
    cartCount,
    addToCart,
    cartItems,
    removeFromCart,
    clearCartItem,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
