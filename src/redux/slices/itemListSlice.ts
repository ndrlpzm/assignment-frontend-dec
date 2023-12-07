import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import Item from "../../data/objects/item";
import { callApiFetch } from "../../utils/api";

interface ItemListState {
  data: Item[] | null;
  loading: boolean;
  error: string | undefined;
}
const apiPath = "http://54.73.73.228:4369/api/images";
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
      return { ...state, loading: true, error: undefined };
    });
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      try {
        const itemArray: Item[] = Object.keys(action.payload).map((key) => {
          const obj = action.payload[key as keyof typeof action.payload];
          return {
            key: key,
            index: obj.index,
            title: obj.title,
            image: obj.image,
            description: obj.description,
          };
        });
        itemArray.sort((a, b) => a.index - b.index);
        return { ...state, data: itemArray, loading: false };
      } catch (error) {
        return { ...state, loading: false, error: "Unexpected response" };
      }
    });
    builder.addCase(fetchAll.rejected, (state, action) => {
      if (action.payload)
        return { ...state, loading: false, error: action.payload };
      else return { ...state, loading: false, error: action.error.message };
    });
  },
});
export const createTypedAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: string;
}>();
export const fetchAll = createTypedAsyncThunk(
  "items/fetchAll",
  async (_, thunkApi) => {
    return await callApiFetch(apiPath, thunkApi);
  }
);

export const itemsReducer = ItemListSlice.reducer;

export default ItemListSlice.reducer;
