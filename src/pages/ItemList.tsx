import "./css/ItemList.css";
import ItemPreview from "../components/ItemPreview";
import { itemListMock } from "../data/objects/Item";
import { selectActiveItem } from "../redux/activeItemSlice";
import { useSelector } from "react-redux";

export default function ItemList() {
  const selectedItem = useSelector(selectActiveItem);
  return (
    <div className="item-container">
      {itemListMock.map((item) => (
        <ItemPreview
          key={item.index}
          item={item}
          isSelected={selectedItem === item.index}
        />
      ))}
    </div>
  );
}
