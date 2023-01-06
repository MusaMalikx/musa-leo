import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const postReducer = createSlice({
  name: "post",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } =
  postReducer.actions;
export const selectData = (state) => state.post.value;

export default postReducer.reducer;
