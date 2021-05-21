import React from "react";
import Table from "./Table";
import {
  countTripTimeInMs,
  formatTime,
  countCurrentConsumption,
  countFuelConsumed,
} from "../../utilities/helperFunctions";

import { useRecoilValue } from "recoil";
import {
  selectedCarState as carAtom,
  fuelIncrement as incrementAtom,
  travelDistance as distanceAtom,
} from "../../utilities/atoms";

const Trip = ({ label, travelSpeed, setTravelSpeed }) => {
  const selectedCar = useRecoilValue(carAtom);
  const fuelIncrement = useRecoilValue(incrementAtom);
  const travelDistance = useRecoilValue(distanceAtom);

  const fuelConsumption = countCurrentConsumption(
    selectedCar.baseConsumption,
    fuelIncrement,
    travelSpeed
  );
  const fuelConsumed = countFuelConsumed(
    travelDistance,
    travelSpeed,
    fuelConsumption,
    fuelIncrement
  );
  const travelTime = formatTime(countTripTimeInMs(travelDistance, travelSpeed));

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

      {travelDistance && travelSpeed && fuelConsumption && fuelIncrement ? (
        <Table
          label="Trip 1"
          fuelConsumption={fuelConsumption}
          fuelConsumed={fuelConsumed}
          travelTime={travelTime}
        ></Table>
      ) : null}
    </React.Fragment>
  );
};

export default Trip;
