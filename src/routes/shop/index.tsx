import { useContext } from "react";
import { ProductContext } from "contexts/products.context";
import { ProductCard } from "components/product-card";
import "./styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      <h1 className="page-title">Shop</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
