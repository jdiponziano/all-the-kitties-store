import { ButtonHTMLAttributes, FC } from "react";
import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof BUTTON_TYPES;
};

export const BUTTON_TYPES = {
  google: "button-container google-sign-in",
  primary: "button-container primary",
  inverted: "button-container secondary",
  text: "text",
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...otherProps
}) => {
  return (
    <button className={BUTTON_TYPES[variant]} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
