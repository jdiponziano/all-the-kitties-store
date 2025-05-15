import { ButtonHTMLAttributes, FC } from "react";
import {
  InvertedButton,
  PrimaryButton,
  GoogleSignInButton,
} from "./button-styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "inverted" | "google";
};

const getButton = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "inverted":
      return InvertedButton;
    case "google":
      return GoogleSignInButton;
    default:
      return PrimaryButton;
  }
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...otherProps
}) => {
  const CustomButton = getButton(variant);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
