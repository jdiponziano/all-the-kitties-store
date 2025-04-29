import { useState, useEffect, useContext, FC } from "react";
import { useParams } from "react-router";
import {
  CategoriesContext,
  CategoryItemProps,
} from "contexts/categories.context";
import { ProductCard } from "components/product-card";
import "./styles.scss";
import { ShopDirectoryList } from "components/shop-directory/shop-directory.styles";

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
        <ShopDirectoryList>
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard key={product.id} {...product} />
            </li>
          ))}
        </ShopDirectoryList>
      ) : (
        <p>There are no products in this category</p>
      )}
    </div>
  );
};

export default Category;
