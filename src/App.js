import Speed from "./components/Speed";
import Distance from "./components/Distance";
import SelectVehicle from "./components/SelectVehicle";
import TripDetails from "./components/TripDetails";
import "./App.css";
import React, { useState } from "react";

const carOptions = [
  { name: "Car A", consumption: 3 },
  { name: "Car B", consumption: 3.5 },
  { name: "Car C", consumption: 4 },
];

const slope = 1.009;

const App = () => {
  const [travelDistance, setTravelDistance] = useState(250);
  const [travelSpeed, setTravelSpeed] = useState(60);
  const [selectedCar, setSelectedCar] = useState(carOptions[0]);

  return (
    <React.Fragment>
      STATE: travelLength: {travelDistance} travelSpeed: {travelSpeed}{" "}
      selectedCar: {selectedCar.name || "null"} <br></br>
      <br></br>
      <SelectVehicle
        selectedCar={selectedCar}
        setSelectedCar={setSelectedCar}
        carOptions={carOptions}
      />
      <Speed travelSpeed={travelSpeed} setTravelSpeed={setTravelSpeed} />
      <Distance
        travelDistance={travelDistance}
        setTravelDistance={setTravelDistance}
      />
      <TripDetails
        travelDistance={travelDistance}
        travelSpeed={travelSpeed}
        selectedCar={selectedCar}
        slope={slope}
      />
    </React.Fragment>
  );
};

export default App;
