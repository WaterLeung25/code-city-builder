import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
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

  const handleProblemSolved = useMemo(() => {
    return (difficulty, pattern) => {
      dispatch(addResources({ difficulty, pattern }));
    };
  }, [dispatch]);

  const handleBuildingPurchase = useMemo(() => {
    return (cost) => {
      try {
        dispatch(spendResources({ cost }));
        return true;
      } catch (error) {
        console.error("Failed to purchase building:", error);
        return false;
      }
    };
  }, [dispatch]);

  const canAffordCost = useMemo(() => {
    return (cost) => {
      return Object.entries(cost).every(
        ([resource, amount]) => resources[resource] >= amount
      );
    };
  }, [resources]);

  return {
    resources,
    stats,
    handleProblemSolved,
    handleBuildingPurchase,
    canAffordCost,
  };
};
