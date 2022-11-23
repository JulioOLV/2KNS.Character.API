import { EnumRaces } from '../enums/enum-races';

export interface Caracteristic {
  race: EnumRaces;
  class: string;
  antecedent: string;
  alignment: string;
  age: number;
  height: number;
  weight: number;
  eyes: string;
  skin: string;
  hair: string;
  secoundaryLanguage: string;
}
