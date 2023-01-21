import { EnumRaces } from "../enums/enum-races";
import { Bonus } from "./bonus";
import { Height } from "./height";
import { Names } from "./names";

export interface Race {
  name: EnumRaces,
  bonus: Bonus[],
  maxAge: number,
  height: Height,
  displacement: number,
  names: Names[],
  languages: string[],
}
