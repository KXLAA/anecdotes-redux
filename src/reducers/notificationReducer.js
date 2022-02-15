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

export const setNotification = (anecdote, timer) => {
  return (dispatch) => {
    dispatch(createNotification(anecdote.content));
    setTimeout(() => {
      dispatch(removeNotification());
    }, timer);
  };
};
export default notificationSlice.reducer;
