import { useNavigate } from "react-router-dom";
import Item from "../data/objects/Item";
interface ItemPreviewInput {
  item: Item;
  isSelected: boolean;
  setSelectedItem: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export default function ItemPreview({
  item,
  isSelected,
  setSelectedItem,
}: ItemPreviewInput) {
  const navigate = useNavigate();
  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (!isSelected) setSelectedItem(item.index);
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
