import { useNavigate } from "react-router-dom";
import Item from "../data/objects/Item";
import { useDispatch } from "react-redux";
import { setActive } from "../redux/slices/activeItemSlice";
interface ItemPreviewInput {
  item: Item;
  isSelected: boolean;
}
export default function ItemPreview({ item, isSelected }: ItemPreviewInput) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (!isSelected) dispatch(setActive(item.index));
    navigate(`/${item.index}/item`);
  }

  return (
    <article
      onClick={handleClick}
      className={isSelected ? "selected-item" : ""}
    >
      <img alt={item.description} src={item.image}></img>
    </article>
  );
}
