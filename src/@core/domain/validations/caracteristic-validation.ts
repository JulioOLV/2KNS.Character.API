import { Validator } from 'fluentvalidation-ts';
import { RaceCreate } from '../util/race-create-instance';
import { Caracteristic } from '../value-objects/caracteristic';

export class CaracteristicValidation extends Validator<Caracteristic> {
  constructor() {
    super();

    this.validateRace();
    this.ruleFor('class')
      .notNull()
      .notEmpty()
      .withMessage('Class should not be null or empty');
    this.ruleFor('weight').notNull().withMessage('Weight should not be null');
    this.ruleFor('secoundaryLanguage')
      .notNull()
      .notEmpty()
      .withMessage('SecoundaryLanguage should not be null or empty');
  }

  private validateRace() {
    this.ruleFor('race').notEmpty().withMessage('Race should not be empty');
    this.validateHeigth();
    this.validateAge();
  }

  private validateHeigth() {
    this.ruleFor('height')
      .must((_, c) => RaceCreate[c.race]()?.height.max >= _)
      .withMessage('Height should not be greater');

    this.ruleFor('height')
      .must((_, c) => RaceCreate[c.race]()?.height.min <= _)
      .withMessage('Height should not be less');
  }

  private validateAge() {
    this.ruleFor('age')
      .must((_, c) => RaceCreate[c.race]()?.maxAge >= _)
      .withMessage('Age should not be greater');
  }
}
