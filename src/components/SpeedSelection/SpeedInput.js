import React from "react";
import { useRecoilValue } from "recoil";
import { userConfigsState as configsAtom } from "../../utilities/recoilState";
import { SliderContainer, SliderInput, NumberInput } from "../styled";
import { createTickmarks } from "../../utilities/helperFunctions";

const SpeedInput = ({ name, label, min, max, travelSpeed, setTravelSpeed }) => {
  const userConfigs = useRecoilValue(configsAtom);

  const mappedTickmarks = createTickmarks(
    userConfigs.minSpeed,
    userConfigs.maxSpeed,
    10
  ).map((value) => {
    return <option key={value} value={value}></option>;
  });

  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <SliderContainer>
        <SliderInput
          type="range"
          name={name}
          min={min}
          max={max}
          value={travelSpeed || 0}
          onChange={(e) => setTravelSpeed(e.target.value)}
          list="km/h"
        ></SliderInput>
        <datalist id="km/h">{mappedTickmarks}</datalist>
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
