import React from "react";
import SpeedInput from "./SpeedInput";
import { useRecoilState } from "recoil";
import {
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";

const SpeedSelection = () => {
  const [travelSpeed1, setTravelSpeed1] = useRecoilState(speedAtom1);
  const [travelSpeed2, setTravelSpeed2] = useRecoilState(speedAtom2);
  return (
    <React.Fragment>
      <SpeedInput
        label="Trip 1"
        travelSpeed={travelSpeed1}
        setTravelSpeed={setTravelSpeed1}
      />
      <SpeedInput
        label="Trip 2"
        travelSpeed={travelSpeed2}
        setTravelSpeed={setTravelSpeed2}
      />
    </React.Fragment>
  );
};

export default SpeedSelection;
