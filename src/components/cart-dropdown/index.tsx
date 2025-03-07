import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import Button from "components/button";
import CartItem from "components/cart-items";
import "./styles.scss";

const CartDropdown: FC = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      {cartItems && cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems?.map((item) => (
            <li>
              <CartItem {...item} />
            </li>
          ))}
        </div>
      ) : (
        <div className="empty-message">Your cart is empty</div>
      )}
      <Button variant="primary">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
