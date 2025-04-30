import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import {
  CartIconContainer,
  CartIconText,
  ShoppingIcon,
} from "./cart-icon.styles";

export type CartIconProps = {
  onClick?: () => void;
};

export const CartIcon: FC<CartIconProps> = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <CartIconText>{cartCount}</CartIconText>
    </CartIconContainer>
  );
};
