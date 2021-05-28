import React from "react";
import { SliderContainer, SliderInput, NumberInput } from "../styled";

const SpeedInput = ({ name, label, min, max, travelSpeed, setTravelSpeed }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <SliderContainer>
        <SliderInput
          type="range"
          name={name}
          min={min}
          max={max}
          value={travelSpeed}
          onChange={(e) => setTravelSpeed(e.target.value)}
          list="tickmarks"
        ></SliderInput>
        <datalist id="tickmarks">
          <option value="10"></option>
          <option value="20"></option>
          <option value="30"></option>
          <option value="40"></option>
          <option value="50"></option>
          <option value="60"></option>
          <option value="70"></option>
          <option value="80"></option>
          <option value="90"></option>
          <option value="100"></option>
          <option value="110"></option>
          <option value="120"></option>
          <option value="130"></option>
          <option value="140"></option>
        </datalist>
        <NumberInput
          type="number"
          value={travelSpeed}
          onChange={(e) => setTravelSpeed(e.target.value)}
          min={min}
          max={max}
          placeholder={`${min}-${max}`}
          name={name}
        />
        <span>km/h</span>
      </SliderContainer>
    </React.Fragment>
  );
};

export default SpeedInput;
