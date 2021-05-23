import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  travelDistance as distanceAtom,
  selectedCarState as carAtom,
} from "../utilities/atoms";
import styled from "@emotion/styled";
import { ViewContainer } from "./styled";

const DistanceSelection = () => {
  const [travelDistance, setTravelDistance] = useRecoilState(distanceAtom);
  const selectedCar = useRecoilValue(carAtom);

  if (!selectedCar) {
    return null;
  }

  return (
    <ViewContainer>
      <h3>
        2. Step<br></br>
        <label htmlFor="distance">Set your travelling distance</label>
      </h3>
      <SliderContainer>
        <input
          type="range"
          name="distance"
          min="1"
          max="2000"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
        ></input>
        <NumberInput
          type="number"
          value={travelDistance}
          onChange={(e) => setTravelDistance(e.target.value)}
          min="1"
          max="2000"
          name="distance"
          placeholder="1 - 2000"
        />
        <span>km</span>
      </SliderContainer>
    </ViewContainer>
  );
};

export default DistanceSelection;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const NumberInput = styled.input`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-botton-style: dotted;
  outline: none;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
