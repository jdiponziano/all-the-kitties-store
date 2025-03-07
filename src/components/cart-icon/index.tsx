import { FC } from "react";
import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import "./styles.scss";

export type CartIconProps = {
  itemCount?: number;
  onClick?: () => void;
};

export const CartIcon: FC<CartIconProps> = ({ itemCount = 0, onClick }) => {
  return (
    <button className="cart-icon-container" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </button>
  );
};
