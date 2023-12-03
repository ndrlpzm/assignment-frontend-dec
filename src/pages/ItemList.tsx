import ItemPreview from "../components/ItemPreview";
import { itemListMock } from "../data/objects/Item";
import "./css/ItemList.css";

export default function ItemList() {
  return (
    <div className="item-container">
      {itemListMock.map((item) => (
        <ItemPreview key={item.index} item={item} />
      ))}
    </div>
  );
}
