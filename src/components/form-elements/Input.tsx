import { FC, InputHTMLAttributes } from "react";
import { FormGroup, FormLabel, FormInput } from "./form-elements.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export const Input: FC<InputProps> = ({ label, id, ...otherProps }) => {
  return (
    <FormGroup>
      <FormLabel
        className={`${!!otherProps.value ? "shrink" : ""}`}
        htmlFor={id}
      >
        {label}
      </FormLabel>
      <FormInput id={id} {...otherProps} />
    </FormGroup>
  );
};
