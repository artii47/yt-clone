import React from "react";
import {
  createStore,
  applyMiddleware,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reducers from "../reducers/rootReducer";

export const renderWithProvider = (Component, initialStoreState) => {
  const store = createStore(
    reducers,
    initialStoreState,
    applyMiddleware(...getDefaultMiddleware())
  );
  return { ...render(<Provider store={store}>{Component}</Provider>), store };
};
