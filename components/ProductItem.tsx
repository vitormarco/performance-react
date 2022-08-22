interface IProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}
export const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
};