export const districts = {
  FUNDAMENTALS: "Fundamentals District",
  ALGORITHM: "Algorithm Avenue",
  DATA_STRUCTURE: "Data Structure District",
  ADVANCED: "Advanced Algorithms Area",
  MASTERS: "Master's Quarter",
  SPECIAL: "Special District",
};

export const buildings = {
  [districts.FUNDAMENTALS]: [
    {
      id: "two-pointers-tower",
      name: "Two Pointers Tower",
      levels: [
        {
          level: 1,
          name: "Pointer Post",
          cost: { SP: 50 },
        },
        {
          level: 2,
          name: "Pointer Plaza",
          cost: { SP: 100, BM: 20 },
        },
        {
          level: 3,
          name: "Pointer Palace",
          cost: { SP: 200, BM: 50 },
        },
      ],
    },
    // Add other buildings in the same format...
    {
      id: "hash-structure-hub",
      name: "Hash Structure Hub",
      levels: [
        {
          level: 1,
          name: "Hash House",
          cost: { SP: 50 },
        },
        {
          level: 2,
          name: "Hash Haven",
          cost: { SP: 100, BM: 20 },
        },
        {
          level: 3,
          name: "Hash Headquarters",
          cost: { SP: 200, BM: 50 },
        },
      ],
    },
    {
      id: "linked-list-lodge",
      name: "Linked List Lodge",
      levels: [
        {
          level: 1,
          name: "List Lodge",
          cost: { SP: 50 },
        },
        {
          level: 2,
          name: "List Library",
          cost: { SP: 100, BM: 20 },
        },
        {
          level: 3,
          name: "List Laboratory",
          cost: { SP: 200, BM: 50 },
        },
      ],
    },
  ],
  // Add other districts...
  [districts.ALGORITHM]: [
    {
      id: "fast-slow-center",
      name: "Fast & Slow Center",
      levels: [
        {
          level: 1,
          name: "Runner's Rest",
          cost: { SP: 75 },
        },
        {
          level: 2,
          name: "Runner's Resort",
          cost: { SP: 150, BM: 30 },
        },
        {
          level: 3,
          name: "Runner's Realm",
          cost: { SP: 250, BM: 60 },
        },
      ],
    },
    {
      id: "sliding-window-workshop",
      name: "Sliding Window Workshop",
      levels: [
        {
          level: 1,
          name: "Window Workshop",
          cost: { SP: 75 },
        },
        {
          level: 2,
          name: "Window Warehouse",
          cost: { SP: 150, BM: 30 },
        },
        {
          level: 3,
          name: "Window Wonder",
          cost: { SP: 250, BM: 60 },
        },
      ],
    },
    {
      id: "binary-search-base",
      name: "Binary Search Base",
      levels: [
        {
          level: 1,
          name: "Search Station",
          cost: { SP: 75 },
        },
        {
          level: 2,
          name: "Search Sanctuary",
          cost: { SP: 150, BM: 30 },
        },
        {
          level: 3,
          name: "Search Spire ",
          cost: { SP: 250, BM: 60 },
        },
      ],
    },
  ],
  [districts.DATA_STRUCTURE]: [
    {
      id: "stack-square",
      name: "Stack Square",
      levels: [
        {
          level: 1,
          name: "Stack Studio ",
          cost: { SP: 100 },
        },
        {
          level: 2,
          name: "Stack Station",
          cost: { SP: 200, BM: 40 },
        },
        {
          level: 3,
          name: "Stack Stronghold ",
          cost: { SP: 300, BM: 80 },
        },
      ],
    },
    {
      id: "heap-heights",
      name: "Heap Heights",
      levels: [
        {
          level: 1,
          name: "Heap House",
          cost: { SP: 100 },
        },
        {
          level: 2,
          name: "Heap Hall",
          cost: { SP: 200, BM: 40 },
        },
        {
          level: 3,
          name: "Heap Haven",
          cost: { SP: 300, BM: 80 },
        },
      ],
    },
    {
      id: "interval-institute",
      name: "Interval Institute",
      levels: [
        {
          level: 1,
          name: "Interval Inn",
          cost: { SP: 100 },
        },
        {
          level: 2,
          name: "Interval Institute",
          cost: { SP: 200, BM: 40 },
        },
        {
          level: 3,
          name: "Interval Imperial",
          cost: { SP: 300, BM: 80 },
        },
      ],
    },
  ],
  [districts.ADVANCED]: [
    {
      id: "prefix-sum-palace",
      name: "Prefix Sum Palace",
      levels: [
        {
          level: 1,
          name: "Sum Shelter",
          cost: { SP: 125 },
        },
        {
          level: 2,
          name: "Sum Sanctuary",
          cost: { SP: 250, BM: 50 },
        },
        {
          level: 3,
          name: "Sum Citadel",
          cost: { SP: 350, BM: 90 },
        },
      ],
    },
    {
      id: "tree-terrace",
      name: "Tree Terrace",
      levels: [
        {
          level: 1,
          name: "Tree Tower",
          cost: { SP: 125 },
        },
        {
          level: 2,
          name: "Tree Temple",
          cost: { SP: 250, BM: 50 },
        },
        {
          level: 3,
          name: "Tree Triumph",
          cost: { SP: 350, BM: 90 },
        },
      ],
    },
    {
      id: "trie-territory",
      name: "Trie Territory",
      levels: [
        {
          level: 1,
          name: "Trie Tent",
          cost: { SP: 125 },
        },
        {
          level: 2,
          name: "Trie Temple",
          cost: { SP: 250, BM: 50 },
        },
        {
          level: 3,
          name: "Trie Throne",
          cost: { SP: 350, BM: 90 },
        },
      ],
    },
  ],
  [districts.MASTERS]: [
    {
      id: "graph-grove",
      name: "Graph Grove",
      levels: [
        {
          level: 1,
          name: "Graph Garden",
          cost: { SP: 150 },
        },
        {
          level: 2,
          name: "Graph Gallery",
          cost: { SP: 300, BM: 60 },
        },
        {
          level: 3,
          name: "Graph Grand Palace",
          cost: { SP: 400, BM: 100 },
        },
      ],
    },
    {
      id: "backtracking-bastion",
      name: "Backtracking Bastion",
      levels: [
        {
          level: 1,
          name: "Track Tower",
          cost: { SP: 150 },
        },
        {
          level: 2,
          name: "Track Tribunal",
          cost: { SP: 300, BM: 60 },
        },
        {
          level: 3,
          name: "Track Triumph",
          cost: { SP: 400, BM: 100 },
        },
      ],
    },
    {
      id: "dynamic-programming-domain",
      name: "Dynamic Programming Domain",
      levels: [
        {
          level: 1,
          name: "DP Dome",
          cost: { SP: 150 },
        },
        {
          level: 2,
          name: "DP Dynasty",
          cost: { SP: 300, BM: 60 },
        },
        {
          level: 3,
          name: "DP Dimension",
          cost: { SP: 400, BM: 100 },
        },
      ],
    },
  ],
  [districts.SPECIAL]: [
    {
      id: "greedy-gateway",
      name: "Greedy Gateway",
      levels: [
        {
          level: 1,
          name: "Greedy Gate",
          cost: { SP: 175 },
        },
        {
          level: 2,
          name: "Greedy Globe",
          cost: { SP: 350, BM: 70 },
        },
        {
          level: 3,
          name: "Greedy Galaxy",
          cost: { SP: 450, BM: 110 },
        },
      ],
    },
    {
      id: "bit-palace",
      name: "Bit Palace",
      levels: [
        {
          level: 1,
          name: "Bit Base",
          cost: { SP: 175 },
        },
        {
          level: 2,
          name: "Bit Bastion",
          cost: { SP: 350, BM: 70 },
        },
        {
          level: 3,
          name: "Bit Beacon",
          cost: { SP: 450, BM: 110 },
        },
      ],
    },
    {
      id: "math-geometry-monument",
      name: "Math & Geometry Monument",
      levels: [
        {
          level: 1,
          name: "Math Manor",
          cost: { SP: 175 },
        },
        {
          level: 2,
          name: "Math Mansion",
          cost: { SP: 350, BM: 70 },
        },
        {
          level: 3,
          name: "Math Metropolis",
          cost: { SP: 450, BM: 110 },
        },
      ],
    },
  ],
};
