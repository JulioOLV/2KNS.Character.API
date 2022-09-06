import { Ally } from '../value-objects/ally';
import { ArmorClass } from '../value-objects/armor-class';
import { Caracteristic } from '../value-objects/caracteristic';
import { Equipament } from '../value-objects/equipament';
import { HitPoint } from '../value-objects/hit-point';
import { Modifier } from '../value-objects/modifier';
import { Name } from '../value-objects/name';
import { SaveThrows } from '../value-objects/save-throws';
import { Skill } from '../value-objects/skill';
import { Speed } from '../value-objects/speed';
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
  inspiration: string;
  armorClass: ArmorClass;
  initiative: number;
  speed: Speed;
  hitPoints: HitPoint;
  proeficiencyBonus: number;
  savingThrows: SaveThrows;
  allies: Ally[];
  treasures: Treasure[];
}
