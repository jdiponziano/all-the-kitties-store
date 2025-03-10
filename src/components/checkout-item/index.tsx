import { useContext, FC } from "react";
import { CartContext, CartItemProps } from "contexts/cart.context";
import "./styles.scss";

const CheckoutItem: FC<{ item: CartItemProps }> = ({ item }) => {
  const { addToCart, removeFromCart, clearCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="cart-grid-row">
      <div className="cart-grid-item cart-product-description">
        <span>
          <img src={imageUrl} alt="" />
          <span>{name}</span>
        </span>
      </div>
      <div className="cart-grid-item">
        <button onClick={() => removeFromCart(item)}>-</button>
        {quantity}
        <button onClick={() => addToCart(item)}>+</button>
      </div>
      <div className="cart-grid-item">{quantity * price}</div>
      <div className="cart-grid-item">
        <button onClick={() => clearCartItem(item)}>X</button>
      </div>
    </div>
  );
};

export default CheckoutItem;
