import { Bonus } from "../../value-objects/bonus";
import { Height } from "../../value-objects/height";
import { Names } from "../../value-objects/names";
import { BaseRace } from "./base/base-race";

export class Dwarf extends BaseRace {
  constructor() {
    super(
      "Anão",
      [
        new Bonus("CON", 2),
      ],
      350,
      new Height(90, 120),
      9,
      [
        new Names("masc", ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"]),
      ]);
    }
}