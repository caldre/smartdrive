import React from "react";
import Header from "./components/Header";
import VehicleSelection from "./components/VehicleSelection";
import DistanceSelection from "./components/DistanceSelection";
import SpeedSelection from "./components/SpeedSelection/SpeedSelection";
import TripSummary from "./components/TripSummary/TripSummary";

import styled from "@emotion/styled";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Header />
      <VehicleSelection />
      <DistanceSelection />
      <SpeedSelection />
      <TripSummary />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

export default App;
