import React from "react";
import { createStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reducers from "../reducers/rootReducer";

export const renderWithProvider = (Component, initialStoreState) => {
  const store = createStore(reducers, initialStoreState);
  return { ...render(<Provider store={store}>{Component}</Provider>), store };
};
