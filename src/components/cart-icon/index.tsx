import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import { ReactComponent as ShoppingIcon } from "assets/cart-icon.svg";
import "./styles.scss";

export type CartIconProps = {
  onClick?: () => void;
};

export const CartIcon: FC<CartIconProps> = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <button className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </button>
  );
};
