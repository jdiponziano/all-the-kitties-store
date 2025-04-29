import { FC } from "react";
import { CategoryItem } from "components/category/category-item";
import { CategoryDataProps } from "data/categories";
import { CategoryList, CategoryListItem } from "./category-directory.styles";

type CategoryDirectoryProps = {
  categories: CategoryDataProps[];
};

export const CategoryDirectory: FC<CategoryDirectoryProps> = ({
  categories,
}) => {
  return (
    <CategoryList className="directory">
      {categories.map((category) => (
        <CategoryListItem key={`category-${category.id}`}>
          <CategoryItem {...category} />
        </CategoryListItem>
      ))}
    </CategoryList>
  );
};
