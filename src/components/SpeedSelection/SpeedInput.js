import React from "react";
import { SliderContainer, SliderInput, NumberInput } from "../styled";

const SpeedInput = ({ name, label, travelSpeed, setTravelSpeed }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <SliderContainer>
        <SliderInput
          type="range"
          name={name}
          min="1"
          max="140"
          value={travelSpeed}
          onChange={(e) => setTravelSpeed(e.target.value)}
        ></SliderInput>
        <NumberInput
          type="number"
          value={travelSpeed}
          onChange={(e) => setTravelSpeed(e.target.value)}
          min="1"
          max="140"
          placeholder="1 - 140"
          name={name}
        />
        <span>km/h</span>
      </SliderContainer>
    </React.Fragment>
  );
};

export default SpeedInput;
