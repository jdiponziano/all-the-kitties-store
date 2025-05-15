import styled from "styled-components";

export const CheckoutFooterContainer = styled.div`
  text-align: right;
`;

export const CheckoutSummary = styled.div`
  min-width: calc(20vw + 134px);
  flex-direction: column;
  display: inline-flex;
`;

export const CheckoutTotal = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;

    span:nth-child(2) {
      font-size: 1.375rem;
    }
  }`;
