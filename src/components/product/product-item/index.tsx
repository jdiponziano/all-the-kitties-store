import { FC, useContext } from "react";
import { CartContext } from "contexts/cart.context";
import { CategoryItemProps } from "contexts/categories.context";
import { Button } from "components/base/button";
import {
  ProductItemContainer,
  ProductItemImage,
  ProductItemDetails,
} from "./product-item.styles";

export const ProductItem: FC<CategoryItemProps> = ({
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
    <ProductItemContainer>
      <ProductItemImage alt="" src={imageUrl} />
      <ProductItemDetails>
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
        <Button variant="primary" type="button" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </ProductItemDetails>
    </ProductItemContainer>
  );
};
