export class ArmorClass {
  armor: number;
  shield: number;
  naturalArmor: number;
  deflection: number;
  misc: number;

  constructor(armor: number, shield: number, naturalArmor: number, deflection: number, misc: number) {
    this.armor = armor;
    this.shield = shield;
    this.naturalArmor = naturalArmor;
    this.deflection = deflection;
    this.misc = misc;
  }
}
