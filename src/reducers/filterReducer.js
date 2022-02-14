import { createSlice } from "@reduxjs/toolkit";
import initialState from "./anecdoteReducer";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterList(state, action) {
      const search = action.payload.search;
      const storeState = action.payload.state;
      storeState.some((s) => s.content !== search);
    },
  },
});

export const { filterList } = filterSlice.actions;
export default filterSlice.reducer;
