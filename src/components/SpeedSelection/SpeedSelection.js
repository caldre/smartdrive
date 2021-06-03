import React from "react";
import SpeedInput from "./SpeedInput";
import { useRecoilState } from "recoil";
import {
  userConfigsState as configAtom,
  travelSpeedState1 as speedAtom1,
  travelSpeedState2 as speedAtom2,
  travelDistanceState as distanceAtom,
} from "../../utilities/recoilState";
import { Card, Title } from "../styled";
import { cardTransition, variants } from "../../utilities/framerConfigs";
import { useRecoilValue } from "recoil";

const SpeedSelection = () => {
  const [travelSpeed1, setTravelSpeed1] = useRecoilState(speedAtom1);
  const [travelSpeed2, setTravelSpeed2] = useRecoilState(speedAtom2);
  const distance = useRecoilValue(distanceAtom);
  const userConfig = useRecoilValue(configAtom);

  if (!distance) {
    return null;
  }

  return (
    <Card
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={cardTransition}
    >
      <Title title="3. Step" />

      <SpeedInput
        name="trip1"
        label="Set travelling speed for Trip 1"
        min={userConfig.minSpeed}
        max={userConfig.maxSpeed}
        travelSpeed={travelSpeed1}
        setTravelSpeed={setTravelSpeed1}
      />

      <SpeedInput
        name="trip2"
        label="Set travelling speed for Trip 2"
        min={userConfig.minSpeed}
        max={userConfig.maxSpeed}
        travelSpeed={travelSpeed2}
        setTravelSpeed={setTravelSpeed2}
      />
    </Card>
  );
};

export default SpeedSelection;
