import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  solutionPoints: 0,
  buildingMaterials: 0,
};

export const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    addSolutionPoints: (state, action) => {
      state.solutionPoints += action.payload;
    },
    addBuildingMaterials: (state, action) => {
      state.buildingMaterials += action.payload;
    },
    spendResources: (state, action) => {
      state.solutionPoints -= action.payload.solutionPoints || 0;
      state.buildingMaterials -= action.payload.buildingMaterials || 0;
    },
  },
});

export const { addSolutionPoints, addBuildingMaterials, spendResources } =
  resourcesSlice.actions;
export default resourcesSlice.reducer;
