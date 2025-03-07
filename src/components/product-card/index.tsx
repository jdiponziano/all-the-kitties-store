import { FC } from "react";
import Button from "components/button";
import "./styles.scss";

export type ProductCardProps = {
  imageUrl: string;
  name: string;
  price: number;
};

export const ProductCard: FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
}) => {
  return (
    <div className="product-card">
      <img alt="" src={imageUrl} />
      <div className="product-card-details">
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
      </div>
      <Button variant="inverted" type="button">
        Add to cart
      </Button>
    </div>
  );
};
