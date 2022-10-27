import { EnumRaces } from '../enums/enum-races';
import { Dwarf } from '../rules/races/dwarf';

export const RaceCreate = {
  [EnumRaces.DWARF]: () => {
    return new Dwarf();
  },
};
