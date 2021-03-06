import React from "react";
import FuelComparison from "./VisualComparison/FuelComparison";
import TimeComparison from "./VisualComparison/TimeComparison";
import Conclusion from "./Conclusion";
import styled from "@emotion/styled";
import { Card, ContentContainer } from "../styled";
import { variants, cardTransition } from "../../utilities/framerConfigs";
import FullDetails from "./FullDetails.js";
import { useRecoilValue } from "recoil";
import {
  travelSpeedState1 as travelSpeedAtom1,
  travelSpeedState2 as travelSpeedAtom2,
} from "../../utilities/recoilState";

const TripSummary = () => {
  const travelSpeed1 = useRecoilValue(travelSpeedAtom1);
  const travelSpeed2 = useRecoilValue(travelSpeedAtom2);

  if (!travelSpeed1 || !travelSpeed2) {
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
        <VisualComparison>
          <TimeComparison />
          <FuelComparison />
        </VisualComparison>
        <Conclusion />
        <FullDetails />
      </ContentContainer>
    </Card>
  );
};

export default TripSummary;

const VisualComparison = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;
