import { configureStore } from "@reduxjs/toolkit";
import { activeItemReducer } from "./slices/activeItemSlice";
import { itemListReducer } from "./slices/itemListSlice";

export const store = configureStore({
  reducer: {
    activeItem: activeItemReducer,
    itemList: itemListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
