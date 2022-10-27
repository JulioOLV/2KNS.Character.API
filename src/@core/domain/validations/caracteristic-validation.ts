import { Validator } from 'fluentvalidation-ts';
import { RaceCreate } from '../util/race-create-instance';
import { Caracteristic } from '../value-objects/caracteristic';

export class CaracteristicValidation extends Validator<Caracteristic> {
  constructor() {
    super();

    this.ruleFor('race').notEmpty().withMessage('Race should not be empty');
    this.checkHeight();
    this.ruleFor('class')
      .notNull()
      .notEmpty()
      .withMessage('Class should not be empty');
  }

  private checkHeight() {
    this.ruleFor('height')
      .must((_, c) => RaceCreate[c.race]().height.max >= _)
      .withMessage('Height should not be greater');
  }
}
