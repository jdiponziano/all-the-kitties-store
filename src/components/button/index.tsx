import { ButtonHTMLAttributes, FC } from 'react';
import './styles.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof BUTTON_TYPES;
};

const BUTTON_TYPES = {
  google: 'google-sign-in',
  primary: 'primary',
  inverted: 'secondary',
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES[variant]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
