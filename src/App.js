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
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-image: linear-gradient(#fff, #eee);
`;

export default App;
