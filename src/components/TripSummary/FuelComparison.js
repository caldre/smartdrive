import React from "react";
import Bar from "./Bar";
import { useRecoilValue } from "recoil";
import {
  selectedCarState as carAtom,
  fuelIncrement as incrementAtom,
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import { countCurrentConsumption } from "../../utilities/helperFunctions";
import styled from "@emotion/styled";

const FuelComparison = () => {
  const selectedCar = useRecoilValue(carAtom);
  const fuelIncrement = useRecoilValue(incrementAtom);
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);

  const consumption1 = countCurrentConsumption(
    selectedCar.baseConsumption,
    fuelIncrement,
    travelSpeed1
  );

  const consumption2 = countCurrentConsumption(
    selectedCar.baseConsumption,
    fuelIncrement,
    travelSpeed2
  );

  return (
    <ComparisonContainer>
      <h3>Fuel</h3>
      <Bar type="fuel" value={consumption1} />
      <Bar type="fuel" value={consumption2} />
    </ComparisonContainer>
  );
};

export default FuelComparison;

const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: space-evenly;
`;
