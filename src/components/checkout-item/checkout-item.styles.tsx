import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  padding: 1.375rem 0;
  border-bottom: 1px solid #e7e7e7;
`;

export const CheckoutItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-width: 90px;

  &:first-child {
    justify-content: start;
    flex-grow: 1;
  }
`;

export const CheckoutItemButton = styled.button`
  background-color: transparent;
  border: none;
  fill: var(--base-text-color);
  padding: 0;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 100%;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e7e7e7;
  }
`;

export const CheckoutItemDetails = styled(CheckoutItem)`
  .image-container {
    width: 8.25rem;
    height: 8.25rem;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const CheckoutItemPrice = styled(CheckoutItem)`
  justify-content: end;
  min-width: 20vw;
`;
