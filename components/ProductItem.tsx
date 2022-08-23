import { memo } from "react";

interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}
const ProductItemComponent = ({ product }: IProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
