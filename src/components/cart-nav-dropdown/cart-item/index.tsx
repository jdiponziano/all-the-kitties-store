import { FC } from "react";
import { type CartItemProps } from "contexts/cart.context";
import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
} from "./cart-item.styles";

const CartItem: FC<CartItemProps> = ({ name, quantity, imageUrl, price }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="" />
      <CartItemDetails>
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
