import { configureStore } from "@reduxjs/toolkit";
import { activeItemReducer } from "./activeItemSlice";

export const store = configureStore({
  reducer: {
    activeItem: activeItemReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
