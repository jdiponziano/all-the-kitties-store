import { useState, useEffect, useContext, FC } from "react";
import { useParams } from "react-router";
import {
  CategoriesContext,
  CategoryItemProps,
} from "contexts/categories.context";
import { ProductList, ProductItem } from "components/product";

const Category: FC = () => {
  const { category } = useParams<{ category: string }>();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<CategoryItemProps[]>([]);

  useEffect(() => {
    if (category) setProducts(categories[category] || []);
  }, [category, categories]);

  return (
    <div>
      {products ? (
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <ProductItem key={product.id} {...product} />
            </li>
          ))}
        </ProductList>
      ) : (
        <p>There are no products in this category</p>
      )}
    </div>
  );
};

export default Category;
