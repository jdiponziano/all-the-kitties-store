import styled from "styled-components";

export const ProductItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProductItemImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 0.3125rem;
  border-radius: 0.5rem;
`;

export const ProductItemDetails = styled.div`
  width: 100%;
  .name {
    margin-bottom: 0.9375rem;
    font-size: 1.125rem;
  }

  .price {
    font-size: 1.125rem;
  }
`;
