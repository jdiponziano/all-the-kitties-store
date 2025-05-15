import styled from "styled-components";

export const TwoColumnsFormsContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;

  section {
    margin-top: 3rem;
  }

  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
`;
