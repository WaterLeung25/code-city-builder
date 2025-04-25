import { createSlice, createSelector } from "@reduxjs/toolkit";
import { PATTERN_TO_CATEGORY } from "../../data/patterns"; // Assuming you have a mapping of patterns to categories

const initialState = {
  SP: 0, // Solving Points
  BM: 0, // Building Materials
  stats: {
    totalProblemsSolved: 0,
    problemsByDifficulty: {
      easy: 0,
      medium: 0,
      hard: 0,
    },
    problemsByPattern: {},
  },
};

// Base rates for difficulties
const DIFFICULTY_BASE_RATES = {
  easy: {
    SP: 10,
    BM: 0,
  },
  medium: {
    SP: 20,
    BM: 5,
  },
  hard: {
    SP: 30,
    BM: 10,
  },
};

const CATEGORY_MULTIPLIERS = {
  FUNDAMENTALS: 1.0,
  ALGORITHM: 1.2,
  DATA_STRUCTURE: 1.3,
  ADVANCED: 1.4,
  MASTERS: 1.5,
  SPECIAL: 1.6,
};

// Calculate final rewards based on both difficulty and pattern
const calculateRewards = (difficulty, pattern) => {
  const baseRates = DIFFICULTY_BASE_RATES[difficulty];
  const cat = PATTERN_TO_CATEGORY[pattern];
  const multiplier = CATEGORY_MULTIPLIERS[cat] ?? 1;

  return {
    SP: Math.round(baseRates.SP * multiplier),
    BM: Math.round(baseRates.BM * multiplier),
  };
};

const resourcesSlice = createSlice({
  name: "resources",
  initialState,
  reducers: {
    addResources: (state, action) => {
      const { difficulty, pattern } = action.payload;
      const rewards = calculateRewards(difficulty, pattern);

      // Add resources
      state.SP += rewards.SP;
      state.BM += rewards.BM;

      // Update stats
      state.stats.totalProblemsSolved += 1;
      state.stats.problemsByDifficulty[difficulty] += 1;

      if (!state.stats.problemsByPattern[pattern]) {
        state.stats.problemsByPattern[pattern] = 0;
      }
      state.stats.problemsByPattern[pattern] += 1;
    },

    spendResources: (state, action) => {
      const { cost } = action.payload;

      const canAfford = Object.entries(cost).every(
        ([resource, amount]) => state[resource] >= amount
      );

      if (!canAfford) {
        throw new Error("Insufficient resources");
      }

      Object.entries(cost).forEach(([resource, amount]) => {
        state[resource] -= amount;
      });
    },

    resetResources: (state) => {
      return initialState;
    },
  },
});

export const { addResources, spendResources, resetResources } =
  resourcesSlice.actions;

// Base selector
const selectResourcesState = (state) => state.resources;

// Memoized selectors
export const selectResources = createSelector(
  [selectResourcesState],
  (resources) => ({
    SP: resources.SP,
    BM: resources.BM,
  })
);

export const selectStats = createSelector(
  [selectResourcesState],
  (resources) => resources.stats
);

export default resourcesSlice.reducer;
