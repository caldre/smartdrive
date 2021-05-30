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

const TripDetails = ({ label, travelSpeed }) => {
  //THIS NEEDS TO BE ABOUT CHARTS ROLES: FUEL & TIME
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
    selectedCar.baseConsumption,
    fuelIncrement
  );
  const travelTime = formatTime(countTripTimeInMs(travelDistance, travelSpeed));

  return (
    <React.Fragment>
      {travelDistance && travelSpeed && fuelConsumption && fuelIncrement ? (
        <Table
          label={label}
          fuelConsumption={fuelConsumption}
          fuelConsumed={fuelConsumed}
          travelTime={travelTime}
        ></Table>
      ) : null}
    </React.Fragment>
  );
};

export default TripDetails;
