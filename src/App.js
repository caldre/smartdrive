import React from "react";
import Header from "./components/Header";
import VehicleSelection from "./components/VehicleSelection/VehicleSelection";
import DistanceSelection from "./components/DistanceSelection";
import SpeedSelection from "./components/SpeedSelection/SpeedSelection";

import TripSummary from "./components/TripSummary/TripSummary";
import "./App.css";
import CountBtn from "./components/CountBtn";

import styled from "@emotion/styled";

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <VehicleSelection />
        <DistanceSelection />
        <SpeedSelection />
        <CountBtn />
        <TripSummary />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
