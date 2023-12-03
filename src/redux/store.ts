import { configureStore } from "@reduxjs/toolkit";
import { activeItemReducer } from "./slices/activeItemSlice";
import { itemsReducer } from "./slices/itemListSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    activeItem: activeItemReducer,
    items: itemsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
