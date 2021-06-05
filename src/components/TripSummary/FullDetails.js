import React from "react";
import { useRecoilValue } from "recoil";
import {
  selectedCarState as selectedCarAtom,
  travelDistanceState as distanceAtom,
  travelSpeedState1 as speedAtom1,
  travelSpeedState2 as speedAtom2,
  computedValuesState as computedValuesSelector,
} from "../../utilities/recoilState";
import styled from "@emotion/styled";
import { formatTime } from "../../utilities/helperFunctions";

const FullDetails = () => {
  const selectedCar = useRecoilValue(selectedCarAtom);
  const travelDistance = useRecoilValue(distanceAtom);
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);
  const computedValues = useRecoilValue(computedValuesSelector);

  const { trip1, trip2 } = computedValues;

  return (
    <details>
      <summary>See Full Details</summary>
      <Table>
        <thead>
          <tr>
            <Th colSpan="2"></Th>
            <Th>Trip 1</Th>
            <Th>Trip 2</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Selected Car</Td>
            <Td></Td>
            <Td>{selectedCar.name}</Td>
            <Td>{selectedCar.name}</Td>
          </tr>
          <tr>
            <Td>Travel Distance</Td>
            <Td>(km)</Td>
            <Td>{travelDistance}</Td>
            <Td>{travelDistance}</Td>
          </tr>
          <tr>
            <Td>Speed</Td>
            <Td>(km/h)</Td>
            <Td>{travelSpeed1}</Td>
            <Td>{travelSpeed2}</Td>
          </tr>
          <tr>
            <Td>Fuel Consumption</Td>
            <Td>(l/100km)</Td>
            <Td>{trip1.litersPer100km}</Td>
            <Td>{trip2.litersPer100km}</Td>
          </tr>
          <tr>
            <Td>Total Fuel Consumed</Td>
            <Td>(liters)</Td>
            <Td>{trip1.totalFuelConsumption}</Td>
            <Td>{trip2.totalFuelConsumption}</Td>
          </tr>
          <tr>
            <Td>Time Consumed</Td>
            <Td></Td>
            <Td>{formatTime(trip1.travelTimeInMs)}</Td>
            <Td>{formatTime(trip2.travelTimeInMs)}</Td>
          </tr>
        </tbody>
      </Table>
    </details>
  );
};

export default FullDetails;

const Table = styled.table`
  margin: 0 auto;
  margin-top: 2rem;
  padding: 0rem;
  font-size: 0.8rem;
  border-collapse: collapse;
  cursor: default;

  tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

const Th = styled.th`
  background: var(--gradient-1);
  color: white;
  font-weight: normal;
  text-align: right;
  padding: 0rem 1rem;
`;

const Td = styled.td`
  text-align: right;
  padding: 0 0.5rem;
`;
