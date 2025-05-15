import { useContext, FC } from "react";
import { CartContext, CartItemProps } from "contexts/cart.context";
import { ReactComponent as PlusSign } from "assets/plus-sign.svg";
import { ReactComponent as MinusSign } from "assets/minus-sign.svg";
import { ReactComponent as Remove } from "assets/remove.svg";
import {
  CheckoutItem as StyledCartItem,
  CheckoutItemContainer,
  CheckoutItemButton,
  CheckoutItemDetails,
  CheckoutItemPrice,
} from "./checkout-item.styles";

export const CheckoutItem: FC<{ item: CartItemProps }> = ({ item }) => {
  const { addToCart, removeFromCart, clearCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = item;

  return (
    <CheckoutItemContainer>
      <CheckoutItemDetails>
        <span>
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <span>{name}</span>
        </span>
      </CheckoutItemDetails>
      <StyledCartItem>
        <CheckoutItemButton
          aria-label={
            quantity === 1
              ? `Remove ${name} from cart`
              : `Decrease quantity of ${name} in cart`
          }
          onClick={() => removeFromCart(item)}
        >
          <MinusSign />
        </CheckoutItemButton>
        {quantity}
        <CheckoutItemButton
          aria-label={`Increase quantity of ${name} in cart`}
          onClick={() => addToCart(item)}
        >
          <PlusSign />
        </CheckoutItemButton>
      </StyledCartItem>
      <CheckoutItemPrice>{quantity * price}</CheckoutItemPrice>
      <StyledCartItem>
        <CheckoutItemButton
          aria-label={`Remove ${name} from cart`}
          onClick={() => clearCartItem(item)}
        >
          <Remove />
        </CheckoutItemButton>
      </StyledCartItem>
    </CheckoutItemContainer>
  );
};
