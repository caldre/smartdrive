import React from "react";

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
            <td>{fuelConsumed}</td>
            <td>{fuelConsumption}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
