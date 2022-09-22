import { EnumTypeNames } from "../enums/enum-type-names";

export class Names {
  type: EnumTypeNames;
  examples: string[];

  constructor(type : EnumTypeNames, examples : string[]) {
    this.type = type;
    this.examples = examples;
  }
}