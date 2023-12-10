import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item } from "../../data/item";

interface ActiveItemState {
  value: Item | undefined;
}
const initialState: ActiveItemState = { value: undefined };
export const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<Item>) => {
      return { value: action.payload };
    },
  },
});

export const { setActive } = activeItemSlice.actions;
export const activeItemReducer = activeItemSlice.reducer;

export default activeItemSlice.reducer;
