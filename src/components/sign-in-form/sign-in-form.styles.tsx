import styled from "styled-components";

export const SignInFormActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;
