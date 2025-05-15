import { FC } from "react";
import { Link } from "react-router";
import { PrimaryButton } from "components/base/button/button-styles";
import { CartList } from "components/cart-nav-dropdown/cart-list";
import { CartDropdown as StyledCardDropdown } from "./cart-dropdown.styles";

export const CartDropdown: FC = () => {
  return (
    <StyledCardDropdown>
      <CartList />
      <PrimaryButton as={Link} to="checkout">
        GO TO CHECKOUT
      </PrimaryButton>
    </StyledCardDropdown>
  );
};
