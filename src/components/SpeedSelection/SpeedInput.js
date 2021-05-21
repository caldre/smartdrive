import React from "react";

const SpeedInput = ({ label, travelSpeed, setTravelSpeed }) => {
  return (
    <React.Fragment>
      <h3>{label}</h3>
      <label htmlFor={label}>Set travelling speed</label>
      <input
        type="range"
        name={label}
        min="1"
        max="140"
        value={travelSpeed}
        onChange={(e) => setTravelSpeed(e.target.value)}
      ></input>
      <input
        type="number"
        value={travelSpeed}
        onChange={(e) => setTravelSpeed(e.target.value)}
        min="1"
        max="140"
        name={label}
      />
      <span>km/h</span>
    </React.Fragment>
  );
};

export default SpeedInput;
