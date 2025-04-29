import styled from "styled-components";

export const CartIconContainer = styled.button`
  background: none;
  border: none;
  position: relative;
  display: flex;
  padding: 0;
  align-items: center;
  cursor: pointer;

  .shopping-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CartIconText = styled.span`
  margin-left: 0.5em;
  font-size: 1rem;
  color: var(--primaryTextColor);
  font-weight: bold;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: var(--primaryButtonBackgroundColor);
  border-radius: 50%;
  padding: 0.25em 0.5em;
  color: white;
`;
