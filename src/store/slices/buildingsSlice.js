import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  buildings: {},  // Structure: { buildingId: { level: 1, districtId: 'xxx' } }
};

const buildingsSlice = createSlice({
    name: 'buildings',
    initialState,
    reducers: {
        buildStructure: (state, action) => {
            const { buildingId, districtId } = action.payload;
            state.buildings[buildingId] = {
                level: 1,
                districtId,
            }
        },
        upgradeStructure: (state, action) => {
            const { buildingId } = action.payload;
            if (state.buildings[buildingId]) {
                state.buildings[buildingId].level += 1;
            }
        },
    }
});

export const { buildStructure, upgradeStructure } = buildingsSlice.actions;
export default buildingsSlice.reducer;