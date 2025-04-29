import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 0.3125rem;
  border-radius: 0.5rem;
`;

export const ProductCardDetails = styled.div`
  width: 100%;
  .name {
    margin-bottom: 0.9375rem;
    font-size: 1.125rem;
  }

  .price {
    font-size: 1.125rem;
  }
`;
