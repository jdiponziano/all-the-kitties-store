import styled from "styled-components";

export const CategoryList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryListItem = styled.li`
  min-width: 30%;
  height: 15rem;
  flex: 1 1 auto;
  border: 1px solid black;
  margin: 0 0.46875rem 0.9375rem;
  overflow: hidden;

  &:first-child {
    margin-right: 0.46875rem;
  }

  &:last-child {
    margin-left: 0.46875rem;
  }
`;
