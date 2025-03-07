import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import Button from "components/button";
import "./styles.scss";

export type ProductCardProps = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export const ProductCard: FC<ProductCardProps> = ({
  id,
  imageUrl,
  name,
  price,
}) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (): void => {
    addToCart({ id, imageUrl, name, price });
  };

  return (
    <div className="product-card">
      <img alt="" src={imageUrl} />
      <div className="product-card-details">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
      </div>
      <Button variant="inverted" type="button" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};
