import { EnumAttribute } from '../enums/enum-attribute';

export class Bonus {
  attribute: EnumAttribute;
  value: number;

  constructor(attribute: EnumAttribute, value: number) {
    this.attribute = attribute;
    this.value = value;
  }
}
