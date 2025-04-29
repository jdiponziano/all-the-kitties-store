import { FC, useContext } from "react";
import { UserContext } from "contexts/user.context";
import { CartContext } from "contexts/cart.context";
import { signOutUser } from "utils/firebase";
import { CartIcon } from "components/cart-nav-dropdown/cart-icon";
import { CartDropdown } from "components/cart-nav-dropdown/cart-dropdown";
import {
  NavLinks,
  NavLinkItem,
  Navbar,
  NavButton,
  NavLink,
} from "./navigation-styles";

const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext);
  const { isOpen, toggleCart } = useContext(CartContext);

  return (
    <Navbar>
      <NavLinks>
        <NavLinkItem>
          <NavLink to="/">Home</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to="/shop">Shop</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          {currentUser ? (
            <NavButton onClick={signOutUser}>Sign Out</NavButton>
          ) : (
            <NavLink to="/account">Sign In</NavLink>
          )}
        </NavLinkItem>
        <NavLinkItem>
          <CartIcon onClick={toggleCart} />
        </NavLinkItem>
      </NavLinks>
      {isOpen && <CartDropdown />}
    </Navbar>
  );
};

export default Navigation;
