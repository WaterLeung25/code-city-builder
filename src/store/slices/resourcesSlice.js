import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  solutionPoints: 0,
  buildingMaterials: 0,
  patternProgress: {}
};

const resourcesSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    addSolutionPoints: (state, action) => {
      state.solutionPoints += action.payload;
    },
    addBuildingMaterials: (state, action) => {
      state.buildingMaterials += action.payload;
    },
    updatePatternProgress: (state, action) => {
      const { pattern, count } = action.payload;
      state.patternProgress[pattern] = (state.patternProgress[pattern] || 0) + count;
    }
  }
});

export const { addSolutionPoints, addBuildingMaterials, updatePatternProgress } = resourcesSlice.actions;
export default resourcesSlice.reducer;