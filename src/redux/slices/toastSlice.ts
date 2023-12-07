import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Toast } from "../../data/objects/toast";
interface ToastState {
  value: Toast[];
}
const initialState: ToastState = { value: [] };
export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Toast>) => {
      if (state.value.length > 0)
        return { value: [...state.value, action.payload] };
      else return { value: [action.payload] };
    },
    deleteFirst: (state) => {
      if (state.value.length > 0) return { value: state.value.slice(1) };
    },
  },
});

export const { add, deleteFirst } = toastSlice.actions;
export const toastReducer = toastSlice.reducer;

export default toastSlice.reducer;
