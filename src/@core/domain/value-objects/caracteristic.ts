import { EnumRaces } from '../enums/enum-races';
import { EntityValidation } from '../util/entity-validation';
import { CaracteristicValidation } from '../validations/caracteristic-validation';

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
  validationEntity: EntityValidation;

  constructor(
    race: EnumRaces,
    classCharacter: string,
    antecedent: string,
    alignment: string,
    age: number,
    height: number,
    weight: number,
    eyes: string,
    skin: string,
    hair: string,
    secondaryLanguage: string,
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

    this.validate();
  }

  private validate() {
    const validator = new CaracteristicValidation();
    const validatorResult = validator.validate(this);
    this.validationEntity = new EntityValidation(true, {});
    if (Object.keys(validatorResult).length > 0) {
      this.validationEntity = new EntityValidation(
        !validatorResult,
        validatorResult,
      );
    }
  }
}
