import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  travelDistanceState as distanceAtom,
  selectedCarState as carAtom,
  userConfigsState as configsAtom,
} from "../utilities/recoilState";
import {
  Card,
  Title,
  SliderContainer,
  SliderInput,
  NumberInput,
  ContentContainer,
} from "./styled";
import { cardTransition, variants } from "../utilities/framerConfigs";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);
  const selectedCar = useRecoilValue(carAtom);
  const userConfigs = useRecoilValue(configsAtom);

  if (!selectedCar) {
    return null;
  }

  return (
    <Card
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <ContentContainer>
        <Title title="2. Step" />
        <label htmlFor="distance">Set travelling distance</label>

        <SliderContainer>
          <SliderInput
            type="range"
            name="distance"
            min={userConfigs.minDistance}
            max={userConfigs.maxDistance}
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
            min={userConfigs.minDistance}
            max={userConfigs.maxDistance}
            name="distance"
            placeholder={`${userConfigs.minDistance} - ${userConfigs.maxDistance}`}
          />
          <span>km</span>
        </SliderContainer>
      </ContentContainer>
    </Card>
  );
};

export default DistanceSelection;
