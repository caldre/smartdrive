import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  travelDistanceState as distanceAtom,
  selectedCarState as carAtom,
  userConfigsState as configsAtom,
} from "../utilities/recoilState";
import {
  Card,
  SliderContainer,
  SliderInput,
  NumberInput,
  ContentContainer,
} from "./styled";
import { cardTransition, variants } from "../utilities/framerConfigs";
import { createTickmarks } from "../utilities/helperFunctions";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);
  const selectedCar = useRecoilValue(carAtom);
  const userConfigs = useRecoilValue(configsAtom);

  if (!selectedCar) {
    return null;
  }

  const mappedTickmarks = createTickmarks(
    userConfigs.minDistance,
    userConfigs.maxDistance,
    100
  ).map((value) => {
    return <option key={value} value={value}></option>;
  });

  return (
    <Card
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <ContentContainer>
        <label htmlFor="distance">Set travelling distance</label>

        <SliderContainer>
          <SliderInput
            type="range"
            name="distance"
            min={userConfigs.minDistance}
            max={userConfigs.maxDistance}
            value={travelDistance || 0}
            onChange={(e) => setTravelDistance(e.target.value)}
            list="km-ticks"
          ></SliderInput>
          <datalist id="km-ticks">{mappedTickmarks}</datalist>
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
