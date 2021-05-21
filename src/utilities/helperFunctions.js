import React from "react";

export const countTripTimeInMs = (distance, speed) => {
  return Math.floor((distance / speed) * 1000 * 60 * 60);
};

export const formatTime = (ms) => {
  const months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30.5));
  const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 30.5);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  return (
    <span>
      {months ? (
        <span>{`${months} ${months === 1 ? "month " : "months "}`}</span>
      ) : null}
      {days ? <span>{`${days} ${days === 1 ? "day " : "days "}`}</span> : null}
      {!months && hours ? <span>{`${hours}h `}</span> : null}
      {!months && !days && minutes ? <span>{`${minutes}min`}</span> : null}
      {!days && !hours && !minutes ? (
        <span>{`${seconds} ${seconds === 1 ? "second" : "seconds"}`}</span>
      ) : null}
    </span>
  );
};

export const countCurrentConsumption = (
  baseConsumption,
  fuelIncrement,
  speed
) => {
  return (baseConsumption * Math.pow(fuelIncrement, speed - 1)).toFixed(2);
};

export const countFuelConsumed = (
  distance,
  speed,
  baseConsumption,
  fuelIncrement
) => {
  return (
    ((distance * baseConsumption) / 100) *
    Math.pow(fuelIncrement, speed - 1)
  ).toFixed(2);
};
