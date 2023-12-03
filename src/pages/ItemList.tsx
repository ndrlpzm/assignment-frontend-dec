import "./css/ItemList.css";
import ItemPreview from "../components/ItemPreview";
import { useSelector } from "react-redux";
import { selectActiveItem } from "../redux/slices/activeItemSlice";
import {
  fetchAll,
  selectItemList,
  selectItemListLoading,
} from "../redux/slices/itemListSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";

export default function ItemList() {
  const dispatch = useAppDispatch();
  const data = useSelector(selectItemList);
  const loading = useSelector(selectItemListLoading);
  const selectedItem = useSelector(selectActiveItem);
  useEffect(() => {
    if (loading) {
      console.log(dispatch);
      dispatch(fetchAll());
    }
  }, [loading, dispatch]);

  return (
    <div className="item-container">
      {loading ? (
        <>Loading</>
      ) : (
        data !== null &&
        data.map((item) => (
          <ItemPreview
            key={item.index}
            item={item}
            isSelected={selectedItem === item.index}
          />
        ))
      )}
    </div>
  );
}
