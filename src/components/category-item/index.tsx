import { FC } from 'react';
import { CategoryDataProps } from 'data/categories';
import './styles.scss';

type CategoryItemProps = {
  card: CategoryDataProps;
};

const CategoryItem: FC<CategoryItemProps> = ({ card }) => {
  const { title, imageUrl, linkUrl } = card;

  return (
    <a className="category-item" href={linkUrl}>
      <img alt="" className="category-item__image" src={imageUrl} />
      <div className="category-item__content">
        <h3 className="category-item__title">{title}</h3>
        <p className="category-item__description">Shop Now</p>
      </div>
    </a>
  );
};

export default CategoryItem;
