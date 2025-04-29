import { useContext } from "react";
import { Link } from "react-router";
import { CategoriesContext } from "contexts/categories.context";
import { ProductCard } from "components/product-card";
import { ShopDirectoryList } from "./shop-directory.styles";

export const ShopDirectory = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div>
      <h1 className="page-title">Shop</h1>
      {Object.entries(categories).map(([categoryTitle, products]) => (
        <div key={categoryTitle}>
          <h2 className="h4">
            <Link to={`shop/${categoryTitle}`}>{categoryTitle}</Link>
          </h2>
          <ShopDirectoryList>
            {products.slice(0, 4).map((product) => (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))}
          </ShopDirectoryList>
        </div>
      ))}
    </div>
  );
};
