import { FC } from "react";
import { CategoryDataProps } from "data/categories";

import {
  CategoryItemLink,
  CategoryItemImage,
  CategoryItemContent,
  CategoryItemTitle,
  CategoryItemCTA,
} from "./category-item.styles";

export const CategoryItem: FC<CategoryDataProps> = (props) => {
  const { title, imageUrl } = props;

  return (
    <CategoryItemLink to={`/shop/${title.toLowerCase()}`}>
      <CategoryItemImage alt="" src={imageUrl} />
      <CategoryItemContent>
        <CategoryItemTitle>{title}</CategoryItemTitle>
        <CategoryItemCTA>Shop Now</CategoryItemCTA>
      </CategoryItemContent>
    </CategoryItemLink>
  );
};
