import React from "react";
import { useResources } from "../../hooks/useResources";
import "./Dashboard.scss";

const Dashboard = () => {
  const { resources, stats } = useResources();

  return (
    <div className="dashboard">
      <h2>Resources & Progress</h2>

      <div className="resources">
        <div className="resource">
          <h3>Solving Points (SP)</h3>
          <p>{resources.SP}</p>
        </div>
        <div className="resource">
          <h3>Building Materials (BM)</h3>
          <p>{resources.BM}</p>
        </div>
      </div>

      <div className="stats">
        <h3>Statistics</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <label>Total Problems:</label>
            <span>{stats.totalProblemsSolved}</span>
          </div>

          <div className="difficulty-stats">
            <h4>By Difficulty:</h4>
            <div className="stat-item">
              <label>Easy:</label>
              <span>{stats.problemsByDifficulty.easy}</span>
            </div>
            <div className="stat-item">
              <label>Medium:</label>
              <span>{stats.problemsByDifficulty.medium}</span>
            </div>
            <div className="stat-item">
              <label>Hard:</label>
              <span>{stats.problemsByDifficulty.hard}</span>
            </div>
          </div>

          {Object.keys(stats.problemsByPattern).length > 0 && (
            <div className="pattern-stats">
              <h4>By Pattern:</h4>
              {Object.entries(stats.problemsByPattern).map(
                ([pattern, count]) => (
                  <div key={pattern} className="stat-item">
                    <label>{pattern}:</label>
                    <span>{count}</span>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
