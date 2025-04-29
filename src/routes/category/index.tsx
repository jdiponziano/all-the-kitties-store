import { useState, useEffect, useContext, FC } from "react";
import { useParams } from "react-router";
import {
  CategoriesContext,
  CategoryItemProps,
} from "contexts/categories.context";
import { ProductCard } from "components/product-card";
import "./styles.scss";

const Category: FC = () => {
  const { category } = useParams<{ category: string }>();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<CategoryItemProps[]>([]);

  useEffect(() => {
    if (category) setProducts(categories[category] || []);
  }, [category, categories]);

  return (
    <div className="category-container">
      {products ? (
        products.map((product) => <ProductCard key={product.id} {...product} />)
      ) : (
        <p>There are no products in this category</p>
      )}
    </div>
  );
};

export default Category;
