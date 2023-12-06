import { configureStore } from "@reduxjs/toolkit";
import { activeItemReducer } from "./slices/activeItemSlice";
import { itemsReducer } from "./slices/itemListSlice";
import { useDispatch } from "react-redux";
import { toastReducer } from "./slices/toastSlice";

export const store = configureStore({
  reducer: {
    activeItem: activeItemReducer,
    items: itemsReducer,
    toast: toastReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
