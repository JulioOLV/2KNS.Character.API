import { v4 as uuid } from 'uuid';
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
  hitPoints: HitPoint;
  speed: Speed;
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
    d20: number,
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
    this.calculateInitiative(d20);
    this.calculateSavingThrows();
  }

  levelUp() {
    this.level += 1;
  }

  damageReceived(damage: number) {
    this.hitPoints.current -= damage;
  }

  healReceived(heal: number) {
    this.hitPoints.current += heal;
  }

  tempHitPointsReceived(tempHitPoints: number) {
    if (tempHitPoints !== this.hitPoints.temp) {
      this.hitPoints.temp = tempHitPoints;
      this.calculateCurrentHitPoints();
    }
  }

  calculateCurrentHitPoints() {
    this.hitPoints.current = this.hitPoints.max;

    if (this.hitPoints.temp !== 0) {
      this.hitPoints.current = this.hitPoints.current + this.hitPoints.temp;
    }
  }

  calculateMaxHitPoints() {
    // TODO: calcular a partir do dado baseado na classe + modificador de constituição
    this.hitPoints.max = 10;
  }

  calculateInitiative(d20: number) {
    this.initiative = this.modifier.dexterity + d20;
  }

  calculateHitPoints() {
    //TODO: calcular a partir da classe + raça
    this.hitPoints = new HitPoint(0, 10, 10);
  }

  calculateSpeed() {
    //TODO: calcular a partir da raça
    this.speed = new Speed(30, 'ft');
  }

  calculateSavingThrows() {
    //TODO: modificador + bonus da classe
    this.savingThrows = new SaveThrows(
      this.modifier.strength,
      this.modifier.dexterity,
      this.modifier.constitution,
      this.modifier.intelligence,
      this.modifier.wisdom,
      this.modifier.charisma,
    );
  }
}
