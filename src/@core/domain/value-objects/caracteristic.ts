import { EnumRaces } from '../enums/enum-races';

export class Caracteristic {
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

  constructor(
    race : EnumRaces,
    classCharacter : string,
    antecedent : string,
    alignment : string,
    age : number,
    height : number,
    weight : number,
    eyes : string,
    skin : string,
    hair : string,
    secondaryLanguage : string,
  ) {
    this.race = race;
    this.class = classCharacter;
    this.antecedent = antecedent;
    this.alignment = alignment;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.eyes = eyes;
    this.skin = skin;
    this.hair = hair;
    this.secoundaryLanguage = secondaryLanguage;
  }
}
