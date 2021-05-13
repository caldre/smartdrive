import React from "react";

const SelectVehicle = ({ selectedCar, setSelectedCar, carOptions }) => {
  const carOptionsRendered = carOptions.map((car) => {
    return (
      <React.Fragment key={car.name}>
        <br></br>
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

  return carOptionsRendered;
};

export default SelectVehicle;
