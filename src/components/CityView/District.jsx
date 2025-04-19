import React, { useState } from "react";
import Building from "../Buildings/Building";
import { buildings } from "../../data/buildings";
import { useResources } from "../../hooks/useResources";
import "./District.scss";

const District = ({ districtId, districtName, userBuildings }) => {
  const [showBuildOptions, setShowBuildOptions] = useState(false);
  const { resources } = useResources();
  const districtBuildings = buildings[districtName] || [];

  // Check if there are any buildings built in this district
  const builtBuildingsInDistrict = districtBuildings.filter(
    (building) => userBuildings[building.id]
  );

  return (
    <div className="district">
      <div className="district-header">
        <h3>{districtName}</h3>
        <button
          className="build-button"
          onClick={() => setShowBuildOptions(!showBuildOptions)}
        >
          {showBuildOptions ? "Hide" : "Build"}
        </button>
      </div>

      {/* Build New Structure Section */}
      {showBuildOptions && (
        <div className="build-options">
          <h4>Available Structures</h4>
          <div className="available-buildings">
            {districtBuildings.map((building) => (
              <div key={building.id} className="available-building">
                <div className="building-info">
                  <h5>{building.name}</h5>
                  <p>Level 1: {building.levels[0].name}</p>
                  <div className="cost-display">
                    <div className="cost-line">
                      Cost: {building.levels[0].cost.SP} SP
                    </div>
                    <div
                      className={`balance-line ${
                        resources.SP >= building.levels[0].cost.SP
                          ? "sufficient"
                          : "insufficient"
                      }`}
                    >
                      (You have: {resources.SP} SP)
                    </div>
                  </div>
                </div>
                <Building
                  building={{
                    ...building,
                    district: districtId,
                  }}
                  currentLevel={0}
                  showOnlyBuildButton={true}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Built Structures Section */}
      <div className="built-structures">
        <h4>Built Structures</h4>
        {builtBuildingsInDistrict.length > 0 ? (
          <div className="buildings-grid">
            {districtBuildings
              .filter((building) => userBuildings[building.id])
              .map((building) => (
                <Building
                  key={building.id}
                  building={{
                    ...building,
                    district: districtId,
                  }}
                  currentLevel={userBuildings[building.id].level}
                />
              ))}
          </div>
        ) : (
          <div className="empty-district">
            <p>No structures built yet in this district.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default District;
