import styled, { css } from "styled-components";

type FormLabelProps = {
  shrink: boolean;
};

const shrinkLabelStyles = css`
  top: -0.875rem;
  font-size: 0.75rem;
  color: black;
`;

export const FormLabel = styled.label<FormLabelProps>`
  color: grey;
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.3125rem;
  top: 0.625rem;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 2.8125rem 0;

  &:focus-within ${FormLabel} {
    ${shrinkLabelStyles}
  }
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 1.125rem;
  padding: 0.625rem 0.625rem 0.625rem 0.3125rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 1.5625rem 0;

  &:focus {
    outline: none;
  }
`;
