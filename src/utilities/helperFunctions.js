export const countTravelTimeInMs = (distance, speed) => {
  return Math.floor((distance / speed) * 1000 * 60 * 60);
};

export const formatTime = (ms) => {
  const months = Math.floor(ms / (1000 * 60 * 60 * 24 * 30.5));
  const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 30.5);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  switch (true) {
    //MONTHS, DAYS
    case months === 1 && days === 0:
      return `${months}month`;
    case months === 1 && days === 1:
      return `${months}month ${days}day`;
    case months === 1 && days > 1:
      return `${months}month ${days}days`;
    case months > 1 && days === 0:
      return `${months}months`;
    case months > 1 && days === 1:
      return `${months}months ${days}day`;
    case months > 1 && days > 1:
      return `${months}months ${days}days`;

    // DAYS, HOURS
    case days === 1 && hours === 0:
      return `${days}day`;
    case days === 1 && hours === 1:
      return `${days}day ${hours}hour`;
    case days === 1 && hours > 1:
      return `${days}day ${hours}hours`;
    case days > 1 && hours === 0:
      return `${days}days`;
    case days > 1 && hours === 1:
      return `${days}days ${hours}hour`;
    case days > 1 && hours > 1:
      return `${days}days ${hours}hours`;

    // HOURS, MINUTES
    case hours === 1 && minutes === 0:
      return `${hours}hour`;
    case hours === 1 && minutes === 1:
      return `${hours}h ${minutes}min`;
    case hours === 1 && minutes > 1:
      return `${hours}h ${minutes}min`;
    case hours > 1 && minutes === 0:
      return `${hours}hours`;
    case hours > 1 && minutes === 1:
      return `${hours}h ${minutes}min`;
    case hours > 1 && minutes > 1:
      return `${hours}h ${minutes}min`;

    // MINUTES, SECONDS
    case minutes === 1 && seconds === 0:
      return `${minutes}minute`;
    case minutes === 1 && seconds === 1:
      return `${minutes}min ${seconds}s`;
    case minutes === 1 && seconds > 1:
      return `${minutes}min ${seconds}s`;
    case minutes > 1 && seconds === 0:
      return `${minutes}minutes`;
    case minutes > 1 && seconds === 1:
      return `${minutes}min ${seconds}s`;
    case minutes > 1 && seconds > 1:
      return `${minutes}min ${seconds}s`;

    // SECONDS
    case seconds === 1:
      return `${seconds}second`;
    case seconds > 1:
      return `${seconds}seconds`;
    default:
      break;
  }
};

export const countLitersPer100km = (baseConsumption, fuelIncrement, speed) => {
  return (baseConsumption * Math.pow(fuelIncrement, speed - 1)).toFixed(2);
};

export const countTotalFuelConsumed = (
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

export const createTickmarks = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
