import { FC } from "react";
import { type CartItemProps } from "contexts/cart.context";
import "./styles.scss";

const CartItem: FC<CartItemProps> = ({ name, quantity, imageUrl, price }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="" />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
