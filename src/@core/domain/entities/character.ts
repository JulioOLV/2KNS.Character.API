import { v4 as uuid } from 'uuid';
import { Ally } from '../value-objects/ally';
import { ArmorClass } from '../value-objects/armor-class';
import { Caracteristic } from '../value-objects/caracteristic';
import { Equipament } from '../value-objects/equipament';
import { Modifier } from '../value-objects/modifier';
import { Name } from '../value-objects/name';
import { SaveThrows } from '../value-objects/save-throws';
import { Skill } from '../value-objects/skill';
import { Spell } from '../value-objects/spell';
import { Treasure } from '../value-objects/treasure';

export class Character {
  id: string;
  playerId: string;
  name: Name;
  level: number;
  caracteristic: Caracteristic;
  equipaments: Equipament[];
  wealth: number;
  modifier: Modifier;
  skills: Skill[];
  spells: Spell[];
  defect: string;
  inspiration: number;
  armorClass: ArmorClass;
  initiative: number;
  proeficiencyBonus: number;
  savingThrows: SaveThrows;
  allies: Ally[];
  treasures: Treasure[];

  constructor(
    id,
    playerId,
    name,
    caracteristic,
    wealth,
    modifier,
    skills,
    defect,
    armorClass,
    d20,
  ) {
    this.id = id ?? uuid();
    this.playerId = playerId;
    this.name = name;
    this.level = 1;
    this.caracteristic = caracteristic;
    this.wealth = wealth;
    this.modifier = modifier;
    this.skills = skills;
    this.defect = defect;
    this.inspiration = 0;
    this.armorClass = armorClass;
    this.proeficiencyBonus = 0;
    this.calculateInitiative(modifier.dexterity, d20);
    //this.savingThrows = savingThrows; modificador + bonus da classe
  }

  levelUp() {
    this.level += 1;
  }

  private calculateInitiative(dexterity: number, d20: number) {
    this.initiative = dexterity + d20;
  }
}
