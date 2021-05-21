import { atom, selector } from "recoil";

export const selectedCarState = atom({
  key: "selectedCarState",
  default: {},
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
    { id: 1, name: "Car A", baseConsumption: 3, selected: false },
    { id: 2, name: "Car B", baseConsumption: 3.5, selected: false },
    { id: 3, name: "Car C", baseConsumption: 4, selected: false },
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
