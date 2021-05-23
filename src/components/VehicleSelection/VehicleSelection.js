import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  selectedCarState as carAtom,
  selectableCars as carsAtom,
} from "../../utilities/atoms";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { ViewContainer } from "../styled";

const VehicleSelection = () => {
  const carOptions = useRecoilValue(carsAtom);
  const setSelectedCar = useSetRecoilState(carAtom);

  const carOptionsRendered = carOptions.map((car) => {
    return (
      <VehicleContainer key={car.name}>
        <RadioInput
          label={car.name}
          details={car.consumption}
          type="radio"
          name="car"
          value={car.name}
          onChange={() => setSelectedCar(car)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        ></RadioInput>
        <Details>
          Base consumption:<br></br>
          {car.baseConsumption}l/100km
        </Details>
      </VehicleContainer>
    );
  });

  return (
    <ViewContainer>
      <h3>
        1. Step<br></br>
        <label htmlFor="car">Choose your vehicle</label>
      </h3>
      <VehiclesContainer>{carOptionsRendered}</VehiclesContainer>
    </ViewContainer>
  );
};

export default VehicleSelection;

// CSS STUFF BELOW

const VehiclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 6rem;
  width: 7rem;
  border-radius: 0.5rem;
  margin: 0rem 0.5rem;
`;

const RadioInput = styled(motion.input)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  appearance: none;
  outline: none;
  cursor: pointer;
  border: 2px solid var(--ok-gradient-1);
  border-radius: 0.25rem;
  background-color: var(--disabled);
  color: black;
  font-size: 1.25rem;

}

  :before {
  content: attr(label);
	text-align: center;
  }

  :checked {
  border: 0px solid black;
  background: linear-gradient(45deg, var(--ok-gradient-1), var(--ok-gradient-2));
	color: #fff;
	box-shadow: 0rem 0rem 0.25rem #0000002e;
	text-shadow: 0.05rem 0.1rem 0rem #79485f7a;
  }
`;

const Details = styled.span`
  font-size: 0.75rem;
  margin: 0rem 0.25rem;
`;
