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
  private _id: string;
  private _playerId: string;
  private _name: Name;
  private _level: number;
  private _caracteristic: Caracteristic;
  private _equipaments: Equipament[];
  private _wealth: number;
  private _modifier: Modifier;
  private _hitPoints: HitPoint;
  private _speed: Speed;
  private _skills: Skill[];
  private _spells: Spell[];
  private _defect: string;
  private _inspiration: number;
  private _armorClass: ArmorClass;
  private _initiative: number;
  private _proeficiencyBonus: number;
  private _savingThrows: SaveThrows;
  private _allies: Ally[];
  private _treasures: Treasure[];

  public get id() : string {
    return this._id;
  }

  public get playerId() : string {
    return this._playerId;
  }

  public get name() : Name {
    return this._name;
  }

  public get level() : number {
    return this._level;
  }

  public get caracteristic() : Caracteristic {
    return this._caracteristic;
  }

  public get equipaments() : Equipament[] {
    return this._equipaments;
  }

  public get wealth() : number {
    return this._wealth;
  }

  public get modifier() : Modifier {
    return this._modifier;
  }

  public get hitPoints() : HitPoint {
    return this._hitPoints;
  }

  public get speed() : Speed {
    return this._speed;
  }

  public get skills() : Skill[] {
    return this._skills;
  }

  public get spells() : Spell[] {
    return this._spells;
  }

  public get defect() : string {
    return this._defect;
  }

  public get inspiration() : number {
    return this._inspiration;
  }

  public get armorClass() : ArmorClass {
    return this._armorClass;
  }

  public get initiative() : number {
    return this._initiative;
  }

  public get proeficiencyBonus() : number {
    return this._proeficiencyBonus;
  }

  public get savingThrows() : SaveThrows {
    return this._savingThrows;
  }

  public get allies() : Ally[] {
    return this._allies;
  }

  public get treasures() : Treasure[] {
    return this._treasures;
  }

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
    this._id = id ?? uuid();
    this._playerId = playerId;
    this._name = name;
    this._level = 1;
    this._caracteristic = caracteristic;
    this._wealth = wealth;
    this._modifier = modifier;
    this._skills = skills;
    this._defect = defect;
    this._inspiration = 0;
    this._armorClass = armorClass;
    this._proeficiencyBonus = 0;
    this.calculateInitiative(d20);
    this.calculateSavingThrows();
  }

  levelUp() {
    this._level += 1;
  }

  damageReceived(damage: number) {
    this._hitPoints.current -= damage;
  }

  healReceived(heal: number) {
    this._hitPoints.current += heal;
  }

  tempHitPointsReceived(tempHitPoints: number) {
    if (tempHitPoints !== this._hitPoints.temp) {
      this._hitPoints.temp = tempHitPoints;
      this.calculateCurrentHitPoints();
    }
  }

  calculateCurrentHitPoints() {
    this._hitPoints.current = this._hitPoints.max;

    if (this._hitPoints.temp !== 0) {
      this._hitPoints.current = this._hitPoints.current + this._hitPoints.temp;
    }
  }

  calculateMaxHitPoints() {
    // TODO: calcular a partir do dado baseado na classe + modificador de constituição
    this._hitPoints.max = 10;
  }

  calculateInitiative(d20: number) {
    this._initiative = this._modifier.dexterity + d20;
  }

  calculateHitPoints() {
    //TODO: calcular a partir da classe + raça
    this._hitPoints = new HitPoint(0, 10, 10);
  }

  calculateSpeed() {
    //TODO: calcular a partir da raça
    this._speed = new Speed(30, 'ft');
  }

  calculateSavingThrows() {
    //TODO: modificador + bonus da classe
    this._savingThrows = new SaveThrows(
      this._modifier.strength,
      this._modifier.dexterity,
      this._modifier.constitution,
      this._modifier.intelligence,
      this._modifier.wisdom,
      this._modifier.charisma,
    );
  }
}
