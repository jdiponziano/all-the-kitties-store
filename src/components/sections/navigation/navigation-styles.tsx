import styled from "styled-components";
import { NavLink as ReactNavLink } from "react-router";

export const Navbar = styled.nav`
  position: relative;
`;

export const NavLinks = styled.ul`
  display: grid;
  gap: 1.25rem;
  grid-auto-flow: column;
  align-items: center;
`;

export const NavLinkItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(ReactNavLink)`
  text-decoration: none;
  color: #333;

  &: hover;
  &:focus {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }
`;

export const NavButton = styled.button`
  background: none;
  text-decoration: none;
  color: #333;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.active {
    font-weight: 700;
  }
`;
