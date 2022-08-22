import { ProductItem } from "./ProductItem";

interface ISearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export const SearchResults = ({ results }: ISearchResultsProps) => {
  return (
    <div>
      {results.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
};
