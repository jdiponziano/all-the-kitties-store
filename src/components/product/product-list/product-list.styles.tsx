import styled from "styled-components";

export const ProductList = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
  row-gap: 3rem;
  list-style: none;
`;
