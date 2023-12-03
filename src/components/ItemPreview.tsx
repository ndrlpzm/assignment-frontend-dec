import Item from "../data/objects/Item";
interface ItemPreviewInput {
  item: Item;
}
export default function ItemPreview({ item }: ItemPreviewInput) {
  return (
    <article>
      <img alt={item.description} src={item.image}></img>
    </article>
  );
}
