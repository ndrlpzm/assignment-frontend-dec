import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ActiveItemState {
  value: number | undefined;
}
const initialState: ActiveItemState = { value: undefined };
export const activeItemSlice = createSlice({
  name: "activeItem",
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<number>) => {
      //not including state since it has a single property
      return { value: action.payload };
    },
  },
});

export const { setActive } = activeItemSlice.actions;
export const activeItemReducer = activeItemSlice.reducer;
export const selectActiveItem = (state: RootState) => state.activeItem.value;

export default activeItemSlice.reducer;
