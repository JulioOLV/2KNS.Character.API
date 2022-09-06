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

  constructor(
    id,
    playerId,
    name,
    level,
    caracteristic,
    equipaments,
    wealth,
    modifier,
    skills,
    spells,
    defect,
    inspiration,
    armorClass,
    initiative,
    speed,
    hitPoints,
    proeficiencyBonus,
    savingThrows,
    allies,
    treasures,
  ) {
    this.id = id;
    this.playerId = playerId;
    this.name = name;
    this.level = level;
    this.caracteristic = caracteristic;
    this.equipaments = equipaments;
    this.wealth = wealth;
    this.modifier = modifier;
    this.skills = skills;
    this.spells = spells;
    this.defect = defect;
    this.inspiration = inspiration;
    this.armorClass = armorClass;
    this.initiative = initiative;
    this.speed = speed;
    this.hitPoints = hitPoints;
    this.proeficiencyBonus = proeficiencyBonus;
    this.savingThrows = savingThrows;
    this.allies = allies;
    this.treasures = treasures;
  }
}
