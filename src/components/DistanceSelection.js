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
import { cardTransition, variants } from "./framerConfigs";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);
  const selectedCar = useRecoilValue(carAtom);

  if (!selectedCar) {
    return null;
  }

  return (
    <InputCard
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <Title title="2. Step" />
      <label htmlFor="distance">Set travelling distance</label>

      <SliderContainer>
        <SliderInput
          type="range"
          name="distance"
          min="1"
          max="1000"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
          list="km-ticks"
        ></SliderInput>
        <datalist id="km-ticks">
          <option value="1"></option>
          <option value="100"></option>
          <option value="200"></option>
          <option value="300"></option>
          <option value="400"></option>
          <option value="500"></option>
          <option value="600"></option>
          <option value="700"></option>
          <option value="800"></option>
          <option value="900"></option>
          <option value="1000"></option>
        </datalist>
        <NumberInput
          type="number"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
          min="1"
          max="1000"
          name="distance"
          placeholder="1 - 1000"
        />
        <span>km</span>
      </SliderContainer>
    </InputCard>
  );
};

export default DistanceSelection;
