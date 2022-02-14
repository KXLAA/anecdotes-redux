import { createSlice } from "@reduxjs/toolkit";

const initialState = `Notify me Please`;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {},
});

export default notificationSlice.reducer;
