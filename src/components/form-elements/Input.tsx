import { FC, InputHTMLAttributes } from 'react';
import './input.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input: FC<InputProps> = ({ label, id, ...otherProps }) => {
  return (
    <div className="form-group">
      <label
        className={`${!!otherProps.value ? 'shrink' : ''} form-label`}
        htmlFor={id}
      >
        {label}
      </label>
      <input className="form-input" id={id} {...otherProps} />
    </div>
  );
};

export default Input;
