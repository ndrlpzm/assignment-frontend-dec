import "./ItemList.css";
import ItemPreview from "../components/ItemPreview";
import { fetchAll } from "../redux/slices/itemListSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useCreateToast } from "../hooks/toast";

export default function ItemList() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.items);
  const selectedItem = useAppSelector((state) => state.activeItem.value);

  const setToast = useCreateToast();

  useEffect(() => {
    if (loading) {
      dispatch(fetchAll());
    }
  }, [loading, dispatch]);
  useEffect(() => {
    if (error) {
      setToast({ title: "Error", content: error, type: "error" });
    }
  }, [error, setToast]);

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
