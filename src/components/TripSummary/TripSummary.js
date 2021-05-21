import React from "react";
import TripDetails from "./TripDetails";
import TripComparison from "./TripComparison.js";

import { useRecoilValue } from "recoil";
import {
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";

const TripSummary = () => {
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);

  return (
    <React.Fragment>
      <TripDetails label="Trip 1" travelSpeed={travelSpeed1} />
      <TripDetails label="Trip 2" travelSpeed={travelSpeed2} />
      <TripComparison />
    </React.Fragment>
  );
};

export default TripSummary;
