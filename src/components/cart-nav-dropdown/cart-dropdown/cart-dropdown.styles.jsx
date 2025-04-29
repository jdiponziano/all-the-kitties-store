import styled from "styled-components";

export const CartDropdown = styled.div`
  position: absolute;
  width: 20rem;
  height: 100%;
  min-height: 21.25rem;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  border: 0.0625rem solid black;
  background-color: white;
  top: 3.5rem;
  right: 0;
  z-index: 5;
  overflow: auto;

  a {
    margin-top: 1rem;
  }
`;
