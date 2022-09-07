export class Caracteristic {
  race: string;
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
    race,
    classCharacter,
    antecedent,
    alignment,
    age,
    height,
    weight,
    eyes,
    skin,
    hair,
    secondaryLanguage,
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
