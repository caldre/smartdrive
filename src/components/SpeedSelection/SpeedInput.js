import React from "react";
import styled from "@emotion/styled";

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

const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

const SliderInput = styled.input`
  display: flex;
  flex-grow: 9999;
`;

const NumberInput = styled.input`
  display: flex;
  flex-grow: 1;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
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
