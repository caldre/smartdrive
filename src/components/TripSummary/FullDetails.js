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
        <Th colSpan="2"></Th>
        <Th scope="col" style={{ textAlign: "right" }}>
          Trip 1
        </Th>
        <Th scope="col" style={{ textAlign: "right" }}>
          Trip 2
        </Th>
        <tr>
          <Th colSpan="2" scope="row">
            Selected Car
          </Th>

          <Td>{selectedCar.name}</Td>
          <Td>{selectedCar.name}</Td>
        </tr>
        <tr>
          <Th scope="row">Travel Distance</Th>
          <Th>(km)</Th>
          <Td>{travelDistance}</Td>
          <Td>{travelDistance}</Td>
        </tr>
        <tr>
          <Th scope="row">Speed</Th>
          <Th>(km/h)</Th>
          <Td>{travelSpeed1}</Td>
          <Td>{travelSpeed2}</Td>
        </tr>
        <tr>
          <Th scope="row">Fuel Consumption</Th>
          <Th>(l/100km)</Th>
          <Td>{trip1.litersPer100km}</Td>
          <Td>{trip2.litersPer100km}</Td>
        </tr>
        <tr>
          <Th scope="row">Total Fuel Consumed</Th>
          <Th>(liters)</Th>
          <Td>{trip1.totalFuelConsumption}</Td>
          <Td>{trip2.totalFuelConsumption}</Td>
        </tr>
        <tr>
          <Th colSpan="2" scope="row">
            Time Consumed
          </Th>

          <Td>{formatTime(trip1.travelTimeInMs)}</Td>
          <Td>{formatTime(trip2.travelTimeInMs)}</Td>
        </tr>
      </Table>
    </details>
  );
};

export default FullDetails;

const Table = styled.table`
  margin-top: 2rem;
  border-collapse: collapse;
  cursor: default;

  tr:nth-child(odd) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

const Th = styled.th`
  font-weight: normal;
  text-align: left;
  padding: 0rem 1rem;
`;

const Td = styled.td`
  text-align: right;
  padding: 0 1rem;
`;
