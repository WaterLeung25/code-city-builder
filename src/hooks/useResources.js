import { useSelector, useDispatch } from "react-redux";
import {
  addResources,
  spendResources,
  selectResources,
  selectStats,
} from "../store/slices/resourcesSlice";

export const useResources = () => {
  const dispatch = useDispatch();
  const resources = useSelector(selectResources);
  const stats = useSelector(selectStats);

  const handleProblemSolved = (difficulty, pattern) => {
    dispatch(addResources({ difficulty, pattern }));
  };

  const handleBuildingPurchase = (cost) => {
    try {
      dispatch(spendResources({ cost }));
      return true;
    } catch (error) {
      console.error("Failed to purchase building:", error);
      return false;
    }
  };

  const canAffordCost = (cost) => {
    const currentResources = resources;
    return Object.entries(cost).every(
      ([resource, amount]) => currentResources[resource] >= amount
    );
  };

  return {
    resources,
    stats,
    handleProblemSolved,
    handleBuildingPurchase,
    canAffordCost,
  };
};
