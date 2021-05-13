import React from "react";

const Distance = ({ travelDistance, setTravelDistance }) => {
  return (
    <React.Fragment>
      <label htmlFor="length">Length</label>
      <input
        type="range"
        name="length"
        min="1"
        max="2000"
        defaultValue={travelDistance}
        onChange={(e) => setTravelDistance(e.target.value)}
      ></input>
      <div>{travelDistance}</div>
    </React.Fragment>
  );
};

export default Distance;
