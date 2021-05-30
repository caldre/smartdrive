import React from "react";
import DetailsTable from "./DetailsTable";
import { useRecoilValue } from "recoil";
import {
  selectedCarState as carAtom,
  fuelIncrement as incrementAtom,
  travelDistance as distanceAtom,
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import {
  formatTime,
  countTripTimeInMs,
  countFuelConsumed,
} from "../../utilities/helperFunctions";

const TripComparison = () => {
  const selectedCar = useRecoilValue(carAtom);
  const travelDistance = useRecoilValue(distanceAtom);
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);
  const fuelIncrement = useRecoilValue(incrementAtom);

  const fuelConsumed1 = countFuelConsumed(
    travelDistance,
    travelSpeed1,
    selectedCar.baseConsumption,
    fuelIncrement
  );
  const fuelConsumed2 = countFuelConsumed(
    travelDistance,
    travelSpeed2,
    selectedCar.baseConsumption,
    fuelIncrement
  );
  const timeElapsed1 = countTripTimeInMs(travelDistance, travelSpeed1);
  const timeElapsed2 = countTripTimeInMs(travelDistance, travelSpeed2);

  const renderedConclusion = () => {
    if (timeElapsed1 - timeElapsed2 > 0) {
      return (
        <p>
          <strong>Trip 2</strong> is faster by{" "}
          <strong>{formatTime(timeElapsed1 - timeElapsed2)}</strong>, but{" "}
          <strong>{(fuelConsumed2 - fuelConsumed1).toFixed(2)}l</strong> more
          fuel is consumed.
        </p>
      );
    } else if (timeElapsed1 - timeElapsed2 < 0) {
      return (
        <p>
          <strong>Trip 1</strong> is faster by{" "}
          <strong>{formatTime(timeElapsed2 - timeElapsed1)}</strong>, but{" "}
          <strong>{(fuelConsumed1 - fuelConsumed2).toFixed(2)}l</strong> more
          fuel is consumed.
        </p>
      );
    } else return <p>Trips are identical.</p>;
  };

  return (
    <div>
      <details>
        <summary>See Full Details</summary>
        <DetailsTable />
        <div>{renderedConclusion()}</div>
      </details>
    </div>
  );
};

export default TripComparison;
