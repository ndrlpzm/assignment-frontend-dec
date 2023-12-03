import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Item from "../../data/objects/Item";

interface ItemListState {
  value: Item[];
}
const initialState: ItemListState = { value: [] };
export const ItemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    fetchAll: (state, action: PayloadAction<Item[]>) => {
      //not including state since it has a single property
      return { value: action.payload };
    },
  },
});

export const { fetchAll } = ItemListSlice.actions;
export const itemListReducer = ItemListSlice.reducer;
export const selectItemList = (state: RootState) => state.itemList.value;

export default ItemListSlice.reducer;
