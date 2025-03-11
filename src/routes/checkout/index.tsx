import { useContext } from "react";
import { CartContext } from "contexts/cart.context";
import CheckoutItem from "components/checkout-item";
import "./styles.scss";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-grid">
          <div className="cart-grid-body">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-grid-footer">
            <div className="cart-summary">
              <p className="cart-grid-footer-item cart-total">
                <span>Subtotal</span> <span>{cartTotalPrice}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
