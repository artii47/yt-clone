import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

export default configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});
