import { Toast } from "../data/objects/toast";
import { add, deleteFirst } from "../redux/slices/toastSlice";
import { useAppDispatch } from "./redux";

export function useCreateToast() {
  const dispatch = useAppDispatch();
  return (toast: Toast) => {
    dispatch(add(toast));
    setTimeout(() => {
      dispatch(deleteFirst());
    }, 5000);
  };
}
