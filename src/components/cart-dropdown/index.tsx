import { FC } from "react";
import Button from "components/button";
import "./styles.scss";

const CartDropdown: FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button variant="primary">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
