import { Validator } from 'fluentvalidation-ts';
import { Modifier } from '../value-objects/modifier';

export class ModifierValidation extends Validator<Modifier> {
  constructor() {
    super();

    this.validateStrength();
    this.validateDexterity();
    this.validateConstitution();
    this.validateIntelligence();
    this.validateWisdom();
    this.validateCharisma();
  }

  private validateStrength() {
    this.ruleFor('strength')
      .notNull()
      .withMessage('Strength should not be null')
      .must((_, c) => c.strength > 0)
      .withMessage('Strength should not be less than 0');
  }

  private validateDexterity() {
    this.ruleFor('dexterity')
      .notNull()
      .withMessage('Dexterity should not be null')
      .must((_, c) => c.dexterity > 0)
      .withMessage('Dexterity should not be less than 0');
  }

  private validateConstitution() {
    this.ruleFor('constitution')
      .notNull()
      .withMessage('Constitution should not be null')
      .must((_, c) => c.constitution > 0)
      .withMessage('Constitution should not be less than 0');
  }

  private validateIntelligence() {
    this.ruleFor('intelligence')
      .notNull()
      .withMessage('Intelligence should not be null')
      .must((_, c) => c.intelligence > 0)
      .withMessage('Intelligence should not be less than 0');
  }

  private validateWisdom() {
    this.ruleFor('wisdom')
      .notNull()
      .withMessage('Wisdom should not be null')
      .must((_, c) => c.wisdom > 0)
      .withMessage('Wisdom should not be less than 0');
  }

  private validateCharisma() {
    this.ruleFor('charisma')
      .notNull()
      .withMessage('Charisma should not be null')
      .must((_, c) => c.charisma > 0)
      .withMessage('Charisma should not be less than 0');
  }
}
