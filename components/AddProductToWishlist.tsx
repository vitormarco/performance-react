export interface IAddProductToWishlist {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export const AddProductToWishlist = ({
  onAddToWishlist,
  onRequestClose,
}: IAddProductToWishlist) => {
  return (
    <span>
      Deseja adicionar aos favoritos!
      <button onClick={onAddToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
};
