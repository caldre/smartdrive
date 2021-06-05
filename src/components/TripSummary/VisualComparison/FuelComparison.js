import React from "react";
import Bar from "./Bar";
import QuickStats from "./QuickStats";
import { useRecoilValue } from "recoil";
import { computedValuesState as computedValuesSelector } from "../../../utilities/recoilState";
import { ComparisonContainer, BarArea, Title } from "../../styled";

const FuelComparison = () => {
  const { trip1, trip2, maxFuelConsumption } = useRecoilValue(
    computedValuesSelector
  );

  const lessFuelUsed = (a, b) => {
    if (a.totalFuelConsumption < b.totalFuelConsumption) {
      return a;
    } else if (a.totalFuelConsumption > b.totalFuelConsumption) {
      return b;
    }
  };

  return (
    <ComparisonContainer>
      <Title>Fuel Consumption</Title>
      <BarArea>
        <QuickStats
          type="fuel"
          trip={lessFuelUsed(trip1, trip2)}
          difference={Math.abs(
            trip1.totalFuelConsumption - trip2.totalFuelConsumption
          )}
        />
        <Bar
          type="fuel"
          name={trip1.name}
          max={maxFuelConsumption}
          value={trip1.totalFuelConsumption}
        />
        <Bar
          type="fuel"
          name={trip2.name}
          max={maxFuelConsumption}
          value={trip2.totalFuelConsumption}
        />
      </BarArea>
    </ComparisonContainer>
  );
};

export default FuelComparison;
