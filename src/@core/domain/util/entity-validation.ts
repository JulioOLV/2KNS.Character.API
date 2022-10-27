export class EntityValidation {
  isValid: boolean;
  result: object;

  constructor(isValid: boolean, result: object) {
    this.isValid = isValid;
    this.result = result;
  }
}
