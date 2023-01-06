import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterReducer";
import postReducer from "../features/postReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
  },
});
