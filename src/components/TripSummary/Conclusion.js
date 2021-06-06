import React from "react";
import { useRecoilValue } from "recoil";
import { computedValuesState as computedValuesSelector } from "../../utilities/recoilState";
import { formatTime } from "../../utilities/helperFunctions";

const Conclusion = () => {
  const computedValues = useRecoilValue(computedValuesSelector);

  const { trip1, trip2 } = computedValues;

  let fasterTrip = { travelTimeInMs: null };
  let slowerTrip = { travelTimeInMs: null };

  switch (true) {
    case trip1.travelTimeInMs < trip2.travelTimeInMs:
      fasterTrip = { ...trip1 };
      slowerTrip = { ...trip2 };
      break;
    case trip1.travelTimeInMs > trip2.travelTimeInMs:
      fasterTrip = { ...trip2 };
      slowerTrip = { ...trip1 };
      break;
    default:
      fasterTrip.travelTimeInMs = null;
      break;
  }

  return fasterTrip.travelTimeInMs !== null ? (
    <p>
      <strong>{fasterTrip.name}</strong> is faster by{" "}
      <strong>
        {formatTime(slowerTrip.travelTimeInMs - fasterTrip.travelTimeInMs)}
      </strong>
      , but{" "}
      <strong>
        {" "}
        {(
          fasterTrip.totalFuelConsumption - slowerTrip.totalFuelConsumption
        ).toFixed(2)}
        l
      </strong>{" "}
      more fuel is consumed.
    </p>
  ) : (
    <p>Trips are identical.</p>
  );
};

export default Conclusion;
