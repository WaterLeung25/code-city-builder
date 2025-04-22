import React, { useState } from "react";
import Building from "../Buildings/Building";
import { buildings } from "../../data/buildings";
import { useResources } from "../../hooks/useResources";
import "./District.scss";
import PropTypes from "prop-types";

const District = ({ districtId, districtName, userBuildings }) => {
  const [showBuildOptions, setShowBuildOptions] = useState(false);
  const { resources } = useResources();
  const districtBuildings = buildings[districtName] || [];

  // Group buildings by their original building ID
  const groupedBuildings = Object.entries(userBuildings).reduce(
    (acc, [uniqueId, building]) => {
      if (building.districtId === districtId) {
        const originalId = building.originalBuildingId;
        if (!acc[originalId]) {
          acc[originalId] = [];
        }
        acc[originalId].push({ ...building, uniqueId });
      }
      return acc;
    },
    {}
  );

  const [isExpanded, setIsExpanded] = useState(true);

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
        <div className="structures-header">
          <h4>Built Structures</h4>
          <button
            className="toggle-button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "HIDE" : "SHOW"}
          </button>
        </div>

        {isExpanded && (
          <div className="structures-content">
            {Object.keys(groupedBuildings).length > 0 ? (
              <div className="buildings-grid">
                {districtBuildings.map((building) => {
                  const instances = groupedBuildings[building.id] || [];
                  return instances.map((instance) => (
                    <Building
                      key={instance.uniqueId}
                      building={{
                        ...building,
                        district: districtId,
                      }}
                      buildingInstanceId={instance.uniqueId}
                      currentLevel={instance.level}
                    />
                  ));
                })}
              </div>
            ) : (
              <div className="empty-district">
                <p>No structures built yet in this district.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
District.propTypes = {
  districtId: PropTypes.string.isRequired,
  districtName: PropTypes.string.isRequired,
  userBuildings: PropTypes.object.isRequired,
};

export default District;
