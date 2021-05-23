import React from "react";
import SpeedInput from "./SpeedInput";
import { useRecoilState } from "recoil";
import {
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import styled from "@emotion/styled";
import { ViewContainer } from "../styled";

const SpeedSelection = () => {
  const [travelSpeed1, setTravelSpeed1] = useRecoilState(speedAtom1);
  const [travelSpeed2, setTravelSpeed2] = useRecoilState(speedAtom2);
  return (
    <ViewContainer>
      <h3>Step 3:</h3>
      <SpeedInput
        name="trip1"
        label="Set travelling speed for Trip 1"
        travelSpeed={travelSpeed1}
        setTravelSpeed={setTravelSpeed1}
      />
      <SpeedInput
        name="trip2"
        label="Set travelling speed for Trip 2"
        travelSpeed={travelSpeed2}
        setTravelSpeed={setTravelSpeed2}
      />
    </ViewContainer>
  );
};

export default SpeedSelection;
