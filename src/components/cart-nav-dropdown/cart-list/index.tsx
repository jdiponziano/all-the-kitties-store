import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import CartItem from "components/cart-nav-dropdown/cart-item";
import {
  CartList as CartListUL,
  CartListItem,
  CartMessage,
} from "./cart-list.styles";

export const CartList: FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <CartListUL>
          {cartItems?.map((item) => (
            <CartListItem>
              <CartItem {...item} />
            </CartListItem>
          ))}
        </CartListUL>
      ) : (
        <CartMessage>Your cart is empty</CartMessage>
      )}
    </>
  );
};
