import { configureStore } from "@reduxjs/toolkit";
import resourcesReducer from "./slices/resourcesSlice";
import buildingsReducer from "./slices/buildingsSlice";

export const store = configureStore({
  reducer: {
    resources: resourcesReducer,
    buildings: buildingsReducer,
  },
});