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
    if (data === null) {
      dispatch(fetchAll());
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (error) {
      setToast({ title: "Error", content: error, type: "error" });
    }
  }, [error, setToast]);

  return (
    <>
      <h1>Main Page</h1>
      <div data-testid="item-container" className="item-container">
        {loading && !data ? (
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
