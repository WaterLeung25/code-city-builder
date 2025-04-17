import { useDispatch } from "react-redux";
import React, { useState } from "react";
import {
  addSolutionPoints,
  updatePatternProgress,
} from "../../store/slices/resourcesSlice";
import "./ProgressForm.scss";

const difficultyPoints = {
  easy: 10,
  medium: 30,
  hard: 50,
};

const ProgressForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    pattern: "",
    difficulty: "easy",
    problemName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add solution points based on difficulty
    dispatch(addSolutionPoints(difficultyPoints[formData.difficulty]));

    // Update pattern progress
    dispatch(
      updatePatternProgress({
        pattern: formData.pattern,
        count: 1,
      })
    );

    // Reset form
    setFormData({
      pattern: "",
      difficulty: "easy",
      problemName: "",
    });
  };

  return (
    <form className="progress-form" onSubmit={handleSubmit}>
      <h2>Add Progress</h2>
      <div className="form-group">
        <label htmlFor="pattern">Pattern</label>
        <select
          value={formData.pattern}
          onChange={(e) =>
            setFormData({ ...formData, pattern: e.target.value })
          }
          required
        >
          <option value="">Select Pattern</option>
          <option value="twoPointers">Two Pointers</option>
          <option value="slidingWindow">Sliding Window</option>
          <option value="binarySearch">Binary Search</option>
          <option value="depthFirstSearch">Depth First Search</option>
          <option value="breadthFirstSearch">Breadth First Search</option>
          <option value="backtracking">Backtracking</option>
          <option value="dynamicProgramming">Dynamic Programming</option>
          <option value="greedy">Greedy</option>
          <option value="divideAndConquer">Divide and Conquer</option>
          <option value="graphTraversal">Graph Traversal</option>
          {/* Add more patterns as needed */}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="difficulty">Difficulty</label>
        <select
          value={formData.difficulty}
          onChange={(e) =>
            setFormData({ ...formData, difficulty: e.target.value })
          }
          required
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="problemName">Problem Name</label>

        <input
          type="text"
          placeholder="Enter Problem Name"
          value={formData.problemName}
          onChange={(e) =>
            setFormData({ ...formData, problemName: e.target.value })
          }
          required
        />
      </div>

      <button type="submit">Log Progress</button>
    </form>
  );
};

export default ProgressForm;
