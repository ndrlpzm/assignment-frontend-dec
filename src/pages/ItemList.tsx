import ItemPreview from "../components/ItemPreview";
import { itemListMock } from "../data/objects/Item";

export default function ItemList() {
  return (
    <ul>
      {itemListMock.map((item) => (
        <li key={item.index}>
          <ItemPreview item={item} />
        </li>
      ))}
    </ul>
  );
}
