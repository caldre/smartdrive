import React from "react";
import { useRecoilValue } from "recoil";
import {
  selectedCarState as carAtom,
  fuelIncrement as incrementAtom,
  travelDistance as distanceAtom,
  tripSpeed1 as speedAtom1,
  tripSpeed2 as speedAtom2,
} from "../../utilities/atoms";
import styled from "@emotion/styled";
import {
  formatTime,
  countTripTimeInMs,
  countFuelConsumed,
  countCurrentConsumption,
} from "../../utilities/helperFunctions";

const DetailsTable = () => {
  const selectedCar = useRecoilValue(carAtom);
  const travelDistance = useRecoilValue(distanceAtom);
  const travelSpeed1 = useRecoilValue(speedAtom1);
  const travelSpeed2 = useRecoilValue(speedAtom2);
  const fuelIncrement = useRecoilValue(incrementAtom);

  const trip1 = {
    speed: travelSpeed1,
    fuelConsumption: countCurrentConsumption(
      selectedCar.baseConsumption,
      fuelIncrement,
      travelSpeed1
    ),
    fuelConsumed: countFuelConsumed(
      travelDistance,
      travelSpeed1,
      selectedCar.baseConsumption,
      fuelIncrement
    ),
    timeConsumed: formatTime(countTripTimeInMs(travelDistance, travelSpeed1)),
  };

  const trip2 = {
    speed: travelSpeed2,
    fuelConsumption: countCurrentConsumption(
      selectedCar.baseConsumption,
      fuelIncrement,
      travelSpeed2
    ),
    fuelConsumed: countFuelConsumed(
      travelDistance,
      travelSpeed2,
      selectedCar.baseConsumption,
      fuelIncrement
    ),
    timeConsumed: formatTime(countTripTimeInMs(travelDistance, travelSpeed2)),
  };

  return (
    <React.Fragment>
      <Table>
        <thead></thead>
        <Tr>
          <Td></Td>
          <Th scope="col">Trip 1</Th>
          <Th scope="col"></Th>
          <Th scope="col">Trip 2</Th>
          <Th scope="col"></Th>
        </Tr>
        <tr>
          <Th scope="row">Selected Car</Th>
          <td colspan="4">{selectedCar.name}</td>
        </tr>
        <tr>
          <Th scope="row">Travel Distance</Th>
          <td colspan="4">{travelDistance}</td>
          <td>km</td>
        </tr>
        <tr>
          <Th scope="row">Speed</Th>
          <td>{trip1.speed}</td>
          <td>km/h</td>
          <td>{trip2.speed}</td>
          <td>km/h</td>
        </tr>
        <tr>
          <Th scope="row">Fuel Consumption / 100km</Th>
          <td>{trip1.fuelConsumption}</td>
          <td>l</td>
          <td>{trip2.fuelConsumption}</td>
          <td>l</td>
        </tr>
        <tr>
          <Th scope="row">Total Fuel Consumed</Th>
          <td>{trip1.fuelConsumed}</td>
          <td>l</td>
          <td>{trip2.fuelConsumed}</td>
          <td>l</td>
        </tr>

        <tr>
          <Th scope="row">Time Consumed</Th>
          <td>{trip1.timeConsumed}</td>
          <td>{trip2.timeConsumed}</td>
        </tr>
      </Table>
    </React.Fragment>
  );
};

export default DetailsTable;

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
`;

const Thead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

const Th = styled.th``;

const Td = styled.td``;

const Tbody = styled.tbody`
  border-bottom: 1px solid #dddddd;
`;

const Tr = styled.tr``;
