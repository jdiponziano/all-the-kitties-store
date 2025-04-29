import styled from "styled-components";

export const CartList = styled.ul`
  height: 25rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0;
  margin: 0;
`;

export const CartListItem = styled.li`
  list-style-type: none;
`;

export const CartMessage = styled.p`
  font-size: 1.125rem;
  margin: 3.125rem auto;
`;
