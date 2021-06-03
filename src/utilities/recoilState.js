import { atom, selector } from "recoil";
import {
  countTravelTimeInMs,
  countLitersPer100km,
  countTotalFuelConsumed,
} from "./helperFunctions";

export const selectableCarsState = atom({
  key: "selectableCarsState",
  default: [
    { id: 1, name: "Car A", baseConsumption: 3 },
    { id: 2, name: "Car B", baseConsumption: 3.5 },
    { id: 3, name: "Car C", baseConsumption: 4 },
  ],
});

export const fuelIncrementState = atom({
  key: "fuelIncrementState",
  default: 1.009,
});

export const userConfigsState = atom({
  key: "userConfigs",
  default: {
    minDistance: 100,
    maxDistance: 1000,
    minSpeed: 60,
    maxSpeed: 140,
  },
});

export const selectedCarState = atom({
  key: "selectedCarState",
  default: "",
});

export const travelDistanceState = atom({
  key: "travelDistanceState",
  default: "",
});

export const travelSpeedState1 = atom({
  key: "travelSpeedState1",
  default: "",
});

export const travelSpeedState2 = atom({
  key: "travelSpeedState2",
  default: "",
});

export const computedValuesState = selector({
  key: "countedValuesState",
  get: ({ get }) => {
    const selectableCars = get(selectableCarsState);
    const fuelIncrement = get(fuelIncrementState);
    const userConfigs = get(userConfigsState);

    const selectedCar = get(selectedCarState);
    const travelDistance = get(travelDistanceState);
    const travelSpeed1 = get(travelSpeedState1);
    const travelSpeed2 = get(travelSpeedState2);

    const trip1 = {
      name: "Trip 1",
      travelTimeInMs: countTravelTimeInMs(travelDistance, travelSpeed1),
      litersPer100km: countLitersPer100km(
        selectedCar.baseConsumption,
        fuelIncrement,
        travelSpeed1
      ),
      totalFuelConsumption: countTotalFuelConsumed(
        travelDistance,
        travelSpeed1,
        selectedCar.baseConsumption,
        fuelIncrement
      ),
    };

    const trip2 = {
      name: "Trip 2",
      travelTimeInMs: countTravelTimeInMs(travelDistance, travelSpeed2),
      litersPer100km: countLitersPer100km(
        selectedCar.baseConsumption,
        fuelIncrement,
        travelSpeed2
      ),
      totalFuelConsumption: countTotalFuelConsumed(
        travelDistance,
        travelSpeed2,
        selectedCar.baseConsumption,
        fuelIncrement
      ),
    };

    const maxTravelTime = countTravelTimeInMs(
      userConfigs.maxDistance,
      userConfigs.minSpeed
    );
    const maxFuelConsumption = countTotalFuelConsumed(
      //KORJAA: etsi korkein arvo
      userConfigs.maxDistance,
      userConfigs.maxSpeed,
      selectableCars[2].baseConsumption,
      fuelIncrement
    );

    return { maxTravelTime, maxFuelConsumption, trip1, trip2 };
  },
});
