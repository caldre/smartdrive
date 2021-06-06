import React from "react";
import QuickStats from "./QuickStats";
import Bar from "./Bar";
import { useRecoilValue } from "recoil";
import { computedValuesState as computedValuesSelector } from "../../../utilities/recoilState";
import { ComparisonContainer, BarArea, Title } from "../../styled";

const TimeComparison = () => {
  const { trip1, trip2, maxTravelTime } = useRecoilValue(
    computedValuesSelector
  );

  const fasterTrip = (trip1, trip2) => {
    if (trip1.travelTimeInMs < trip2.travelTimeInMs) {
      return trip1;
    } else if (trip1.travelTimeInMs > trip2.travelTimeInMs) {
      return trip2;
    }
  };

  return (
    <ComparisonContainer>
      <Title>Time Consumption</Title>
      <BarArea>
        <QuickStats
          type="time"
          trip={fasterTrip(trip1, trip2)}
          difference={Math.abs(trip1.travelTimeInMs - trip2.travelTimeInMs)}
        />
        <Bar
          type="time"
          name={trip1.name}
          max={maxTravelTime}
          value={trip1.travelTimeInMs}
        />
        <Bar
          type="time"
          name={trip2.name}
          max={maxTravelTime}
          value={trip2.travelTimeInMs}
        />
      </BarArea>
    </ComparisonContainer>
  );
};

export default TimeComparison;
