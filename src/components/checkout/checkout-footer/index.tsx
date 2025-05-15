import { FC } from "react";
import {
  CheckoutFooterContainer,
  CheckoutSummary,
  CheckoutTotal,
} from "./checkout-footer-styles";

type CheckoutFooterProps = {
  total: number;
};

export const CheckoutFooter: FC<CheckoutFooterProps> = ({ total }) => {
  return (
    <CheckoutFooterContainer>
      <CheckoutSummary>
        <CheckoutTotal>
          <span>Subtotal</span> <span>{total}</span>
        </CheckoutTotal>
      </CheckoutSummary>
    </CheckoutFooterContainer>
  );
};
