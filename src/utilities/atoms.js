import { atom, selector } from "recoil";

export const selectedCarState = atom({
  key: "selectedCarState",
  default: "",
});

export const travelDistance = atom({
  key: "travelDistance",
  default: "",
});

export const tripSpeed1 = atom({
  key: "tripSpeed1",
  default: "",
});

export const tripSpeed2 = atom({
  key: "tripSpeed2",
  default: "",
});

export const selectableCars = atom({
  key: "selectableCars",
  default: [
    { id: 1, name: "Car A", baseConsumption: 3, color: "#ff0055" },
    { id: 2, name: "Car B", baseConsumption: 3.5, color: "#0099ff" },
    { id: 3, name: "Car C", baseConsumption: 4, color: "#22cc88" },
  ],
});

const selectedCarState1 = selector({
  key: "selectedCarState1",
  get: ({ get }) => {
    const carSelected = get(selectedCarState1);
    const carList = get(selectableCars);

    return carList.carSelected((car) => car.selected);
  },
});

export const fuelIncrement = atom({
  key: "fuelIncrement",
  default: 1.009,
});
