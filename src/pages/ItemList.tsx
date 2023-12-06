import "./ItemList.css";
import ItemPreview from "../components/ItemPreview";
import { fetchAll } from "../redux/slices/itemListSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export default function ItemList() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.items.data);
  const loading = useAppSelector((state) => state.items.loading);
  const selectedItem = useAppSelector((state) => state.activeItem.value);
  useEffect(() => {
    if (loading) {
      console.log(dispatch);
      dispatch(fetchAll());
    }
  }, [loading, dispatch]);

  return (
    <>
      <h1>Main Page</h1>
      <div className="item-container">
        {loading ? (
          <>Loading</>
        ) : (
          data !== null &&
          data.map((item) => (
            <ItemPreview
              key={item.index}
              item={item}
              isSelected={selectedItem?.index === item.index}
            />
          ))
        )}
      </div>
    </>
  );
}
