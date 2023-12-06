import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";
//import mock from "../data/MockData.json";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { RootState } from "../redux/store";

export async function callApiFetch(
  path: string,
  thunkApi: GetThunkAPI<{
    state: RootState;
    dispatch?: Dispatch<AnyAction> | undefined;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
  }>
) {
  try {
    const response = await fetch(path, {});
    if (response.ok) return await response.json();
    else
      return thunkApi.rejectWithValue(
        `${response.status}: ${response.statusText}`
      );
  } catch (e) {
    console.log("catch");
    return thunkApi.rejectWithValue("Failed to load");
  }
  //return Object.keys(mock).map((key) => mock[key as keyof typeof mock]);
}
