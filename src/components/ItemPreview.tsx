import { useNavigate } from "react-router-dom";
import Item from "../data/objects/item";
import { setActive } from "../redux/slices/activeItemSlice";
import { handleImgError } from "../utils/utils";
import { useAppDispatch } from "../hooks/redux";
interface ItemPreviewInput {
  item: Item;
  isSelected: boolean;
}
export default function ItemPreview({ item, isSelected }: ItemPreviewInput) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (!isSelected) dispatch(setActive(item));
    navigate(`/${item.index}/${item.key}`);
  }

  return (
    <article
      onClick={handleClick}
      className={isSelected ? "list-item selected-item" : "list-item"}
      data-testid="item-preview"
    >
      <h2>{item.title}</h2>
      <div className="image-wrapper">
        <img
          alt={item.description}
          src={item.image}
          loading="lazy"
          onError={handleImgError}
        ></img>
      </div>
    </article>
  );
}
