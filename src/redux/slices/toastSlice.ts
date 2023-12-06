import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../data/objects/toast";
import { RootState, useAppDispatch } from "../store";
interface ToastState {
  value: Toast[];
}
const initialState: ToastState = { value: [] };
export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Toast>) => {
      state.value.push(action.payload);
    },
    deleteFirst: (state) => {
      if (state.value.length > 0) state.value = state.value.slice(1);
    },
  },
});

export const { add, deleteFirst } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;
export const selectToastList = (state: RootState) => state.toast.value;

export function useCreateToast() {
  const dispatch = useAppDispatch();
  return (toast: Toast) => {
    dispatch(add(toast));
    setTimeout(() => {
      dispatch(deleteFirst());
    }, 5000);
  };
}

export default toastSlice.reducer;
