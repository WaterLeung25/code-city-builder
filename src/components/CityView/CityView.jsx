import React from 'react';
import { useSelector } from 'react-redux';
import { districts } from '../../data/buildings';
import District from './District';
import './CityView.scss';

const CityView = () => {
  const userBuildings = useSelector(state => state.buildings.buildings);
  
  return (
    <div className="city-view">
      <h2>Your Code City</h2>
      <div className="districts-container">
        {Object.entries(districts).map(([key, districtName]) => (
          <District 
            key={key}
            districtId={key}
            districtName={districtName}
            userBuildings={userBuildings}
          />
        ))}
      </div>
    </div>
  );
};

export default CityView;