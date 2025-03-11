import { useContext, FC } from "react";
import { CartContext, CartItemProps } from "contexts/cart.context";
import { ReactComponent as PlusSign } from "assets/plus-sign.svg";
import { ReactComponent as MinusSign } from "assets/minus-sign.svg";
import { ReactComponent as Remove } from "assets/remove.svg";
import "./styles.scss";

const CheckoutItem: FC<{ item: CartItemProps }> = ({ item }) => {
  const { addToCart, removeFromCart, clearCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="cart-grid-row">
      <div className="cart-grid-item cart-product-description">
        <span>
          <div className="image-container">
            <img src={imageUrl} alt="" />
          </div>
          <span>{name}</span>
        </span>
      </div>
      <div className="cart-grid-item">
        <button
          aria-label={
            quantity === 1
              ? `Remove ${name} from cart`
              : `Decrease quantity of ${name} in cart`
          }
          onClick={() => removeFromCart(item)}
        >
          <MinusSign />
        </button>
        {quantity}
        <button
          aria-label={`Increase quantity of ${name} in cart`}
          onClick={() => addToCart(item)}
        >
          <PlusSign />
        </button>
      </div>
      <div className="cart-grid-item cart-price">{quantity * price}</div>
      <div className="cart-grid-item">
        <button
          aria-label={`Remove ${name} from cart`}
          onClick={() => clearCartItem(item)}
        >
          <Remove />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
