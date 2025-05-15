import { useContext } from "react";
import { CartContext } from "contexts/cart.context";
import { CheckoutItem, CheckoutFooter } from "components/checkout";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h1 className="page-title">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <div>
            {cartItems.map((item) => (
              <CheckoutItem key={item.id} item={item} />
            ))}
          </div>
          <CheckoutFooter total={cartTotalPrice} />
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Checkout;
