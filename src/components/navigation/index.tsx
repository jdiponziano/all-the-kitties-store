import { FC, useContext } from "react";
import { Outlet, NavLink, Link } from "react-router";
import { UserContext } from "contexts/user.context";
import { signOutUser } from "utils/firebase";
import "./navigation.scss";

const Navigation: FC = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="site-container">
      <header className="site-header">
        <Link to="/">Eagles Fan Shop</Link>
        <nav>
          <ul className="navigation">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/shop">
                Shop
              </NavLink>
            </li>
            <li>
              {currentUser ? (
                <button className="nav-link nav-button" onClick={signOutUser}>
                  Sign Out
                </button>
              ) : (
                <NavLink className="nav-link" to="/account">
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
