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
import { CaracteristicValidation } from '../validations/caracteristic-validation';
import { EntityValidation } from '../util/entity-validation';
import { ModifierValidation } from '../validations/modifier-validation';
import { HitPointValidation } from '../validations/hit-point-validation';
import { Class } from '../value-objects/class';
import { EnumAttribute } from '../enums/enum-attribute';
import { Race } from '../value-objects/race';

export class Character {
  private _id: string;
  private _playerId: string;
  private _name: Name;
  private _level: number;
  private _caracteristic?: Caracteristic;
  private _equipaments?: Equipament[];
  private _wealth?: number;
  private _modifier?: Modifier;
  private _hitPoints?: HitPoint;
  private _speed?: Speed;
  private _skills?: Skill[];
  private _spells?: Spell[];
  private _defect?: string;
  private _inspiration?: number;
  private _armorClass?: ArmorClass;
  private _initiative?: number;
  private _proeficiencyBonus?: number;
  private _savingThrows?: SaveThrows;
  private _allies?: Ally[];
  private _treasures?: Treasure[];
  validationEntity: EntityValidation[] = [];

  public get id(): string {
    return this._id;
  }

  public get playerId(): string {
    return this._playerId;
  }

  public get name(): Name {
    return this._name;
  }

  public get level(): number {
    return this._level;
  }

  public get caracteristic(): Caracteristic {
    return this._caracteristic;
  }

  public get equipaments(): Equipament[] {
    return this._equipaments;
  }

  public get wealth(): number {
    return this._wealth;
  }

  public get modifier(): Modifier {
    return this._modifier;
  }

  public get hitPoints(): HitPoint {
    return this._hitPoints;
  }

  public get speed(): Speed {
    return this._speed;
  }

  public get skills(): Skill[] {
    return this._skills;
  }

  public get spells(): Spell[] {
    return this._spells;
  }

  public get defect(): string {
    return this._defect;
  }

  public get inspiration(): number {
    return this._inspiration;
  }

  public get armorClass(): ArmorClass {
    return this._armorClass;
  }

  public get initiative(): number {
    return this._initiative;
  }

  public get proeficiencyBonus(): number {
    return this._proeficiencyBonus;
  }

  public get savingThrows(): SaveThrows {
    return this._savingThrows;
  }

  public get allies(): Ally[] {
    return this._allies;
  }

  public get treasures(): Treasure[] {
    return this._treasures;
  }

  constructor(
    playerId: string,
    name: Name,
    wealth: number,
    defect: string
  ) {
    this._id = uuid();
    this._playerId = playerId;
    this._name = name;
    this._level = 1;
    this._wealth = wealth;
    this._defect = defect;
    this._inspiration = 0;
    this._proeficiencyBonus = 0;
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

  calculateInitiative(d20: number) {
    this._initiative = this._modifier.dexterity + d20;
  }

  calculateHitPoints(_class: Class) {
    if (_class.hitDiceType === null || this._modifier.constitution === null) {
      this._hitPoints = {
        temp: 0,
        max: null,
        current: null,
      };
    }
    else {
      const maxHitPoints = _class.hitDiceType + this._modifier.constitution;

      this._hitPoints = {
        temp: 0,
        max: maxHitPoints,
        current: maxHitPoints,
      };
    }

    this.hitPointsValidate();
  }

  calculateSpeed(race : Race) {
    this._speed = {
      value: race.displacement,
      unit: 'ft',
    };
  }

  calculateSavingThrows(_class: Class) {
    const STRENGTH = _class.bonusModifier.find(x => x.attribute === EnumAttribute.STRENGTH);
    const DEXTERITY = _class.bonusModifier.find(x => x.attribute === EnumAttribute.DEXTERITY);
    const CONSTITUTION = _class.bonusModifier.find(x => x.attribute === EnumAttribute.CONSTITUTION);
    const INTELLIGENCE = _class.bonusModifier.find(x => x.attribute === EnumAttribute.INTELLIGENCE);
    const WISDOM = _class.bonusModifier.find(x => x.attribute === EnumAttribute.WISDOM);
    const CHARISMA = _class.bonusModifier.find(x => x.attribute === EnumAttribute.CHARISMA);

    this._savingThrows = {
      strength: STRENGTH ? this._modifier.strength + STRENGTH.value : this._modifier.strength,
      dexterity: DEXTERITY ? this._modifier.dexterity + DEXTERITY.value : this._modifier.dexterity,
      constitution: CONSTITUTION ? this._modifier.constitution + CONSTITUTION.value : this._modifier.constitution,
      intelligence: INTELLIGENCE ? this._modifier.intelligence + INTELLIGENCE.value : this._modifier.intelligence,
      wisdom: WISDOM ? this._modifier.wisdom + WISDOM.value : this._modifier.wisdom,
      charisma: CHARISMA ? this._modifier.charisma + CHARISMA.value : this._modifier.charisma,
    };
  }

  createCaracteristic(caracteristic: Caracteristic) {
    this._caracteristic = {
      ...caracteristic,
    };
    this.caracteristicValidate();
  }

  createModifier(modifier: Modifier) {
    this._modifier = {
      ...modifier,
    };
    this.modifierValidate();
  }

  private caracteristicValidate() {
    const validator = new CaracteristicValidation();
    const validatorResult = validator.validate(this._caracteristic);
    if (Object.keys(validatorResult).length > 0) {
      this.validationEntity.push(
        new EntityValidation(
          !validatorResult,
          validatorResult,
          'Caracteristic',
        ),
      );
    }
  }

  private modifierValidate() {
    const validator = new ModifierValidation();
    const validatorResult = validator.validate(this._modifier);
    if (Object.keys(validatorResult).length > 0) {
      this.validationEntity.push(
        new EntityValidation(!validatorResult, validatorResult, 'Modifier'),
      );
    }
  }

  private hitPointsValidate() {
    const validator = new HitPointValidation();
    const validatorResult = validator.validate(this._hitPoints);
    if (Object.keys(validatorResult).length > 0) {
      this.validationEntity.push(
        new EntityValidation(!validatorResult, validatorResult, 'HitPoints'),
      );
    }
  }
}
