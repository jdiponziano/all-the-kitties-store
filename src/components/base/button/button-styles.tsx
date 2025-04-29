import styled from "styled-components";

export const BaseButton = styled.button`
  border-radius: 300px;
  min-width: 165px;
  width: auto;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: var(--primaryButtonBackgroundColor);
  color: #fff;
  border: 2px solid #fff;
  padding: 0.625rem 1.25rem;
  &:hover {
    background-color: #fff;
    color: var(--primaryButtonBackgroundColor);
    border: 2px solid var(--primaryButtonBackgroundColor);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: white;
    border-color: #4285f4;
    color: #4285f4;
  }
`;
