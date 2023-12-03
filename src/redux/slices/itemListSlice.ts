import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Item from "../../data/objects/Item";
import { useApiMock } from "../../utils/useApi";

interface ItemListState {
  data: Item[] | null;
  loading: boolean;
  error: string | undefined;
}
const initialState: ItemListState = {
  data: null,
  loading: true,
  error: undefined,
};
export const ItemListSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      console.log(action.payload);
      return { ...state, data: action.payload, loading: false };
    });
  },
});

export const fetchAll = createAsyncThunk("items/fetchAll", async () => {
  const response = await useApiMock("/");
  return response;
});

export const itemsReducer = ItemListSlice.reducer;
export const selectItemList = (state: RootState) => state.items.data;
export const selectItemListLoading = (state: RootState) => state.items.loading;

export default ItemListSlice.reducer;
