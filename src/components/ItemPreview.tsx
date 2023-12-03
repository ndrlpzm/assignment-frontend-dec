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
  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    if (!isSelected) setSelectedItem(item.index);
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
