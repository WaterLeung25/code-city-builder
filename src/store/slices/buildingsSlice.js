import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildings: {}, // Structure: { buildingId: { level: 1, districtId: 'xxx' } }
};

const buildingsSlice = createSlice({
  name: "buildings",
  initialState,
  reducers: {
    buildStructure: (state, action) => {
      const { buildingId, districtId } = action.payload;
      const timestamp = Date.now();
      const uniqueBuildingId = `${buildingId}_${timestamp}`;

      state.buildings[uniqueBuildingId] = {
        level: 1,
        districtId,
        originalBuildingId: buildingId, // Store the original building ID for reference
      };
    },
    upgradeStructure: (state, action) => {
      const { buildingId } = action.payload;
      if (state.buildings[buildingId]) {
        state.buildings[buildingId].level += 1;
      }
    },
  },
});

export const { buildStructure, upgradeStructure } = buildingsSlice.actions;
export default buildingsSlice.reducer;
