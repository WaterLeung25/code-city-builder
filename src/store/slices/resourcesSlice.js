import { createSlice, createSelector } from "@reduxjs/toolkit";

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

// Pattern multipliers based on complexity
const PATTERN_MULTIPLIERS = {
  // Fundamentals (1x multiplier - base difficulty)
  "Two Pointers": 1,
  "Hash Table": 1,
  "Linked List": 1,

  // Algorithm Avenue (1.2x multiplier - slightly more complex)
  "Fast & Slow Pointers": 1.2,
  "Sliding Window": 1.2,
  "Binary Search": 1.2,

  // Data Structure District (1.3x multiplier)
  Stack: 1.3,
  Heap: 1.3,
  Interval: 1.3,

  // Advanced Algorithms Area (1.4x multiplier)
  "Prefix Sum": 1.4,
  Tree: 1.4,
  Trie: 1.4,

  // Master's Quarter (1.5x multiplier - most complex)
  Graph: 1.5,
  Backtracking: 1.5,
  "Dynamic Programming": 1.5,

  // Special District (1.4x multiplier)
  Greedy: 1.4,
  "Sort & Search": 1.4,
  "Bit Manipulation": 1.4,
  "Math & Geometry": 1.4,
};

// Calculate final rewards based on both difficulty and pattern
const calculateRewards = (difficulty, pattern) => {
  const baseRates = DIFFICULTY_BASE_RATES[difficulty];
  const multiplier = PATTERN_MULTIPLIERS[pattern] || 1;

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
