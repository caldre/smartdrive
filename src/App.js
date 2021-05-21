import React from "react";
import VehicleSelection from "./components/VehicleSelection";
import DistanceSelection from "./components/DistanceSelection";
import SpeedSelection from "./components/SpeedSelection/SpeedSelection";

import TripSummary from "./components/TripSummary/TripSummary";
import "./App.css";
import CountBtn from "./components/CountBtn";

export const GLOBALS = {
  carOptions: [
    { name: "Car A", baseConsumption: 3 },
    { name: "Car B", baseConsumption: 3.5 },
    { name: "Car C", baseConsumption: 4 },
  ],
  fuelIncrement: 1.009,
};

const App = () => {
  return (
    <React.Fragment>
      <VehicleSelection />
      <DistanceSelection />
      <SpeedSelection />
      <CountBtn />
      <TripSummary />
    </React.Fragment>
  );
};

export default App;
