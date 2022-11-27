export class EntityValidation {
  isValid: boolean;
  result: object;
  objectName: string;

  constructor(isValid: boolean, result: object, objectName: string) {
    this.isValid = isValid;
    this.result = result;
    this.objectName = objectName;
  }
}
