import React from "react";
import { useRecoilState } from "recoil";
import { travelDistance as distanceAtom } from "../utilities/atoms";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);

  return (
    <React.Fragment>
      <br></br>
      <label htmlFor="length">Set travelling length</label>
      <input
        type="range"
        name="length"
        min="1"
        max="2000"
        value={travelDistance}
        onChange={(e) => setTravelDistance(e.target.value)}
      ></input>
      <input
        type="number"
        value={travelDistance}
        onChange={(e) => setTravelDistance(e.target.value)}
        step="10"
        min="1"
        max="2000"
        name="length"
        placeholder="1 - 2000km"
      />
      <span>km</span>
    </React.Fragment>
  );
};

export default DistanceSelection;
