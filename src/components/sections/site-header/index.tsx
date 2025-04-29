import { FC } from "react";
import { Outlet, Link } from "react-router";
import { SiteHeader as StyledSiteHeader } from "./site-header.styles";
import Navigation from "components/sections/navigation";

export const SiteHeader: FC = () => {
  return (
    <div className="site-container">
      <StyledSiteHeader>
        <Link to="/">Shop Title</Link>
        <Navigation />
      </StyledSiteHeader>
      <Outlet />
    </div>
  );
};
