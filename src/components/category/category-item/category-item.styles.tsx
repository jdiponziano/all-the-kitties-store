import styled from "styled-components";
import { Link } from "react-router";

export const CategoryItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CategoryItemContent = styled.div`
  height: 5.625rem;
  padding: 0 1.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`;

export const CategoryItemLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${CategoryItemImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryItemContent} {
      opacity: 0.9;
    }
  }
`;

export const CategoryItemTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  font-size: 1.375rem;
  color: #4a4a4a;
`;

export const CategoryItemCTA = styled.p`
  color: #4a4a4a;
  font-weight: lighter;
  font-size: 1rem;
  margin: 0.5rem 0 0 0;
`;
