import { useContext } from "react";
import { Link } from "react-router";
import { CategoriesContext } from "contexts/categories.context";
import { ProductItem, ProductList } from "components/product";

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
          <ProductList>
            {products.slice(0, 4).map((product) => (
              <li key={product.id}>
                <ProductItem {...product} />
              </li>
            ))}
          </ProductList>
        </div>
      ))}
    </div>
  );
};
