import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectedCarState as carAtom,
  selectableCars as carsAtom,
} from "../utilities/atoms";

const VehicleSelection = () => {
  const carOptions = useRecoilValue(carsAtom);
  const setSelectedCar = useSetRecoilState(carAtom);

  const carOptionsRendered = carOptions.map((car) => {
    return (
      <React.Fragment key={car.name}>
        <label htmlFor="car">{car.name}</label>
        <input
          type="radio"
          name="car"
          value={car.name}
          onChange={() => setSelectedCar(car)}
        ></input>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <h3>Select a vehicle</h3>
      {carOptionsRendered}
    </React.Fragment>
  );
};

export default VehicleSelection;
