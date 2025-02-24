import { FC } from "react";
import CategoryItem from "components/category-item";
import { CategoryDataProps } from "data/categories";

type DirectoryProps = {
  categories: CategoryDataProps[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <ul className="categories-container">
      {categories.map((category) => (
        <li key={`category-${category.id}`}>
          <CategoryItem card={category} />
        </li>
      ))}
    </ul>
  );
};

export default Directory;
