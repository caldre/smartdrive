import React from "react";

const Speed = ({ travelSpeed, setTravelSpeed }) => {
  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <label htmlFor="speed">Speed</label>
      <input
        type="range"
        name="speed"
        min="1"
        max="120"
        defaultValue={travelSpeed}
        onChange={(e) => setTravelSpeed(e.target.value)}
      ></input>
      <div>{travelSpeed}</div>
    </React.Fragment>
  );
};

export default Speed;
