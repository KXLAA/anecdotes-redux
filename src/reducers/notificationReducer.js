import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: `Notify Me Please`,
  visible: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      const content = action.payload;
      state.visible = true;
      state.message = `you voted ${content}`;
    },
    removeNotification(state, action) {
      state.visible = false;
    },
  },
});
export const { createNotification, removeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
