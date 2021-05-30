import React from "react";
import Bar from "./Bar";
import { useRecoilValue } from "recoil";
import {
  travelDistance as distanceAtom,
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import styled from "@emotion/styled";
import { countTripTimeInMs } from "../../utilities/helperFunctions";

const TimeComparison = () => {
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);
  const travelDistance = useRecoilValue(distanceAtom);

  const tripTime1 = countTripTimeInMs(travelDistance, travelSpeed1);
  const tripTime2 = countTripTimeInMs(travelDistance, travelSpeed2);

  return (
    <ComparisonContainer>
      {" "}
      <h3>Time</h3>
      <Bar type="time" value={tripTime1} />
      <Bar type="time" value={tripTime2} />
    </ComparisonContainer>
  );
};

export default TimeComparison;

const ComparisonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: space-evenly;
`;
