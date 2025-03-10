import { useContext } from "react";
import { CartContext } from "contexts/cart.context";
import CheckoutItem from "components/checkout-item";
import "./styles.scss";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-grid">
          <div className="cart-grid-header">
            <div className="cart-grid-header-item">Product</div>
            <div className="cart-grid-header-item">Quantity</div>
            <div className="cart-grid-header-item">Price</div>
            <div className="cart-grid-header-item">Remove</div>
          </div>
          <div className="cart-grid-body">
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-grid-footer">
            <div className="cart-grid-footer-item">Total: {cartTotalPrice}</div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
