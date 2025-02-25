import { Outlet, NavLink, Link } from "react-router";
import "./navigation.scss";

const Navigation = () => {
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
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Navigation;
