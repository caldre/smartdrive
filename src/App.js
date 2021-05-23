import React from "react";
import VehicleSelection from "./components/VehicleSelection/VehicleSelection";
import DistanceSelection from "./components/DistanceSelection";
import SpeedSelection from "./components/SpeedSelection/SpeedSelection";

import TripSummary from "./components/TripSummary/TripSummary";
import "./App.css";
import CountBtn from "./components/CountBtn";

import styled from "@emotion/styled";

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
    <Container>
      <VehicleSelection />
      <DistanceSelection />
      <SpeedSelection />
      <CountBtn />
      <TripSummary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%
  align-items: center;

  justify-content: center;
`;

export default App;
