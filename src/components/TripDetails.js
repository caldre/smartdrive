import React from "react";

const TripDetails = ({ travelDistance, travelSpeed, selectedCar, slope }) => {
  const currentConsumption =
    selectedCar.consumption * Math.pow(slope, travelSpeed);

  const time = travelDistance / travelSpeed;
  const gasGone = (travelDistance * currentConsumption) / 100;

  return (
    <div>
      <br></br>
      time: {time.toFixed(2)} hours<br></br>
      currentConsumption: {currentConsumption} l/100km<br></br>
      gasGone: {gasGone.toFixed(2)} liters
    </div>
  );
};

export default TripDetails;
