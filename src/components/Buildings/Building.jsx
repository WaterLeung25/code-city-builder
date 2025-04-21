import React from "react";
import { useDispatch } from "react-redux";
import { useResources } from "../../hooks/useResources";
import {
  buildStructure,
  upgradeStructure,
} from "../../store/slices/buildingsSlice";
import "./Building.scss";

const Building = ({
  building,
  currentLevel,
  buildingInstanceId,
  showOnlyBuildButton = false,
}) => {
  const dispatch = useDispatch();
  const { resources, canAffordCost, handleBuildingPurchase } = useResources();

  const handleBuild = () => {
    const cost = building.levels[0].cost;
    if (canAffordCost(cost)) {
      const success = handleBuildingPurchase(cost);
      if (success) {
        dispatch(
          buildStructure({
            buildingId: building.id,
            districtId: building.district,
          })
        );
      }
    }
  };

  const handleUpgrade = () => {
    const nextLevel = building.levels[currentLevel];
    if (nextLevel && canAffordCost(nextLevel.cost)) {
      const success = handleBuildingPurchase(nextLevel.cost);
      if (success) {
        dispatch(upgradeStructure({ buildingId: buildingInstanceId }));
      }
    }
  };

  // Show only build button for new structures
  if (showOnlyBuildButton) {
    return (
      <button
        className="build-button"
        onClick={handleBuild}
        disabled={!canAffordCost(building.levels[0].cost)}
      >
        Build Structure
      </button>
    );
  }

  // Show full building card for built structures
  const nextLevel =
    currentLevel < building.levels.length
      ? building.levels[currentLevel]
      : null;

  return (
    <div className={`building level-${currentLevel}`}>
      <div className="building-header">
        <h3>{building.name}</h3>
        <span className="level-badge">Lv.{currentLevel}</span>
      </div>

      <div className="building-content">
        <p className="current-name">{building.levels[currentLevel - 1].name}</p>

        {nextLevel && (
          <div className="upgrade-section">
            <div className="next-level-header">
              <div className="next-level-label">Next Level:</div>
              <div className="next-level-name">{nextLevel.name}</div>
            </div>
            <div className="upgrade-costs">
              {Object.entries(nextLevel.cost).map(([resource, amount]) => (
                <div
                  key={resource}
                  className={`cost-item ${
                    resources[resource] >= amount
                      ? "sufficient"
                      : "insufficient"
                  }`}
                >
                  <span>{resource}:</span>
                  <span>
                    {amount} / {resources[resource]}
                  </span>
                </div>
              ))}
            </div>
            <button
              className="upgrade-button"
              onClick={handleUpgrade}
              disabled={!canAffordCost(nextLevel.cost)}
            >
              Upgrade
            </button>
          </div>
        )}

        {currentLevel === building.levels.length && (
          <div className="max-level">
            <p>Maximum Level Reached!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Building;
