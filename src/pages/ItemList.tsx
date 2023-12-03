import { useState } from "react";
import ItemPreview from "../components/ItemPreview";
import { itemListMock } from "../data/objects/Item";
import "./css/ItemList.css";

export default function ItemList() {
  const [selectedItem, setSelectedItem] = useState<number | undefined>();
  return (
    <div className="item-container">
      {itemListMock.map((item) => (
        <ItemPreview
          key={item.index}
          item={item}
          isSelected={selectedItem === item.index}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
}
