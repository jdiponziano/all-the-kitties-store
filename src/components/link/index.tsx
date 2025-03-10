import { FC } from "react";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router";
import { BUTTON_TYPES } from "components/button";

type LinkProps = RouterLinkProps & {
  variant?: keyof typeof BUTTON_TYPES;
};

const Link: FC<LinkProps> = ({ children, variant = "text", ...otherProps }) => {
  return (
    <RouterLink className={BUTTON_TYPES[variant]} {...otherProps}>
      {children}
    </RouterLink>
  );
};

export default Link;
