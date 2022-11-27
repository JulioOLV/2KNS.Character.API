import { Validator } from 'fluentvalidation-ts';
import { Equipament } from '../value-objects/equipament';

export class EquipamentValidation extends Validator<Equipament> {
  constructor() {
    super();

    this.ruleFor('name')
      .notNull()
      .notEmpty()
      .withMessage('Name should not be null or empty');
  }
}
