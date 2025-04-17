import React from 'react';
import { useSelector } from "react-redux";
import "./Dashboard.scss";

const Dashboard = () => {
    const { solutionPoints, buildingMaterials, patternProgress } = useSelector(
      state => state.resources
    );
  
    return (
      <div className="dashboard">
        <div className="dashboard__resources">
          <div className="resource-card">
            <h3>Solution Points</h3>
            <p>{solutionPoints}</p>
          </div>
          <div className="resource-card">
            <h3>Building Materials</h3>
            <p>{buildingMaterials}</p>
          </div>
        </div>
        
        <div className="dashboard__patterns">
          <h3>Pattern Progress</h3>
          {Object.entries(patternProgress).map(([pattern, count]) => (
            <div key={pattern} className="pattern-progress">
              <span>{pattern}</span>
              <span>{count} problems solved</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Dashboard;
