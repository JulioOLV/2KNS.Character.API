import { Validator } from "fluentvalidation-ts";
import { HitPoint } from "../value-objects/hit-point";

export class HitPointValidation extends Validator<HitPoint> {
  constructor(){
    super();

    this.validateCurrent();
    this.validateMax();
  }

  private validateCurrent() {
    this.ruleFor('current')
      .notNull()
      .withMessage('Current should not be null')
      .must((_, c) => c.current > 0)
      .withMessage('Current should not be less than 0')
      .must((_, c) => c.current <= c.max)
      .withMessage('Current should not be greater than max');
  }

  private validateMax() {
    this.ruleFor('max')
      .notNull()
      .withMessage('Max should not be null')
      .must((_, c) => c.max > 0)
      .withMessage('Max should not be less than 0');
  }
}