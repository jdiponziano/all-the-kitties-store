import { FC } from "react";
import CategoryItem from "components/category-item";
import { CategoryDataProps } from "data/categories";
import "./styles.scss";

type DirectoryProps = {
  categories: CategoryDataProps[];
};

const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <ul className="directory">
      {categories.map((category) => (
        <li key={`category-${category.id}`}>
          {/* <CategoryItem {...category} /> */}
        </li>
      ))}
    </ul>
  );
};

export default Directory;
