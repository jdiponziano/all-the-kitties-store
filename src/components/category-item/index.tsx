import { FC } from "react";
import { CategoryItemProps } from "contexts/categories.context";

import "./styles.scss";

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const { name, imageUrl } = props;

  return (
    <a className="category-item" href={`/${name.toLowerCase()}`}>
      <img alt="" className="category-item__image" src={imageUrl} />
      <div className="category-item__content">
        <h3 className="category-item__title">{name}</h3>
        <p className="category-item__description">Shop Now</p>
      </div>
    </a>
  );
};

export default CategoryItem;
