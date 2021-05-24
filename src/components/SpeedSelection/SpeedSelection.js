import React from "react";
import SpeedInput from "./SpeedInput";
import { useRecoilState } from "recoil";
import {
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import styled from "@emotion/styled";
import { InputCard, Title } from "../styled";

const SpeedSelection = () => {
  const [travelSpeed1, setTravelSpeed1] = useRecoilState(speedAtom1);
  const [travelSpeed2, setTravelSpeed2] = useRecoilState(speedAtom2);
  return (
    <InputCard>
      <Title title="3. Step" />
      <datalist id="custom-list">
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
      <SpeedInput
        name="trip1"
        label="Set travelling speed for Trip 1"
        travelSpeed={travelSpeed1}
        setTravelSpeed={setTravelSpeed1}
        list="custom-list"
      />

      <SpeedInput
        name="trip2"
        label="Set travelling speed for Trip 2"
        travelSpeed={travelSpeed2}
        setTravelSpeed={setTravelSpeed2}
      />
    </InputCard>
  );
};

export default SpeedSelection;
