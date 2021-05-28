import React from "react";
import SpeedInput from "./SpeedInput";
import { useRecoilState } from "recoil";
import {
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
  travelDistance as distanceAtom,
} from "../../utilities/atoms";
import { InputCard, Title } from "../styled";
import { cardTransition, variants } from "../framerConfigs";
import { useRecoilValue } from "recoil";

const SpeedSelection = () => {
  const [travelSpeed1, setTravelSpeed1] = useRecoilState(speedAtom1);
  const [travelSpeed2, setTravelSpeed2] = useRecoilState(speedAtom2);
  const distance = useRecoilValue(distanceAtom);

  if (!distance) {
    return null;
  }

  return (
    <InputCard
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <Title title="3. Step" />

      <SpeedInput
        name="trip1"
        label="Set travelling speed for Trip 1"
        min="60"
        max="120"
        travelSpeed={travelSpeed1}
        setTravelSpeed={setTravelSpeed1}
      />

      <SpeedInput
        name="trip2"
        label="Set travelling speed for Trip 2"
        min="60"
        max="120"
        travelSpeed={travelSpeed2}
        setTravelSpeed={setTravelSpeed2}
      />
    </InputCard>
  );
};

export default SpeedSelection;
