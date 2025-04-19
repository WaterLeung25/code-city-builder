import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from "./slices/resourcesSlice";
import buildingsReducer from "./slices/buildingsSlice";

// Load data from localStorage
const loadState = () => {
  try {
    const savedState = localStorage.getItem("codeCityState");
    return savedState ? JSON.parse(savedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    buildings: buildingsReducer,
  },
  preloadedState: loadState(),
});

// Save state changes to localStorage
store.subscribe(() => {
  localStorage.setItem("codeCityState", JSON.stringify(store.getState()));
});

export default store;
