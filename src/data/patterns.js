export const patterns = {
  FUNDAMENTALS: ["Two Pointers", "Hash Map and Set", "Linked List"],
  ALGORITHM: ["Fast & Slow Pointers", "Sliding Window", "Binary Search"],
  DATA_STRUCTURE: ["Stack", "Heap", "Interval"],
  ADVANCED: ["Prefix Sum", "Tree", "Trie"],
  MASTERS: ["Graph", "Backtracking", "Dynamic Programming"],
  SPECIAL: ["Greedy", "Sort & Search", "Bit Manipulation", "Math & Geometry"],
};

export const PATTERN_TO_CATEGORY = Object.entries(patterns).reduce(
  (acc, [cat, arr]) => {
    arr.forEach((pattern) => {
      acc[pattern] = cat;
    });
    return acc;
  },
  {}
);
