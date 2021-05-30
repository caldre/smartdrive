import React from "react";
import TripComparison from "./TripComparison.js";
import FuelComparison from "./FuelComparison";
import TimeComparison from "./TimeComparison";
import { Card } from "../styled";
import { variants, cardTransition } from "../../utilities/framerConfigs";

const TripSummary = () => {
  return (
    <Card
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <FuelComparison />
      <TimeComparison />
      <TripComparison />
    </Card>
  );
};

export default TripSummary;
