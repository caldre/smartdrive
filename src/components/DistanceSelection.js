import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  travelDistance as distanceAtom,
  selectedCarState as carAtom,
} from "../utilities/atoms";
import {
  InputCard,
  Title,
  SliderContainer,
  SliderInput,
  NumberInput,
} from "./styled";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);
  const selectedCar = useRecoilValue(carAtom);

  if (!selectedCar) {
    return null;
  }

  return (
    <InputCard>
      <Title title="2. Step" />
      <label htmlFor="distance">Set your travelling distance</label>

      <SliderContainer>
        <SliderInput
          type="range"
          name="distance"
          min="1"
          max="2000"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
        ></SliderInput>
        <NumberInput
          type="number"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
          min="1"
          max="2000"
          name="distance"
          placeholder="1 - 2000"
        />
        <span>km</span>
      </SliderContainer>
    </InputCard>
  );
};

export default DistanceSelection;
