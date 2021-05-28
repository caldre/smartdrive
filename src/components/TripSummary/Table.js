import React from "react";
import { Meter } from "../styled";
import Bar from "./Bar";

const Table = ({ label, fuelConsumption, fuelConsumed, travelTime }) => {
  return (
    <React.Fragment>
      <h3>{label} Details</h3>
      <table>
        <thead>
          <tr>
            <th>Travel time</th>
            <th>Fuel consumed (l)</th>
            <th>Consumption (l/100km)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{travelTime}</td>
            <Meter
              min="3"
              max="11.62"
              low="6.5"
              optimum="6"
              high="9.5"
              transition={{
                duration: 2,
              }}
              value={fuelConsumption}
            ></Meter>
            <Bar value={fuelConsumption} role="fuel" />
            <td>{fuelConsumed}</td>
            <td>{fuelConsumption}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
