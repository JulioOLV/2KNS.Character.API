import { faker } from '@faker-js/faker';
import { Equipament } from 'src/@core/domain/value-objects/equipament';
import { Skill } from 'src/@core/domain/value-objects/skill';
import { Character } from '../../../domain/entities/character';
import { EnumRaces } from '../../../domain/enums/enum-races';
import { ArmorClass } from '../../../domain/value-objects/armor-class';
import { Caracteristic } from '../../../domain/value-objects/caracteristic';
import { Modifier } from '../../../domain/value-objects/modifier';
import { Name } from '../../../domain/value-objects/name';
import { Class } from '../../../domain/value-objects/class';

const caracteristic: Caracteristic = {
  race: EnumRaces.DWARF,
  class: faker.random.words(),
  antecedent: faker.random.words(),
  alignment: faker.random.words(),
  age: faker.datatype.number(500),
  height: faker.datatype.number({ min: 0.5, max: 2, precision: 0.01 }),
  weight: faker.datatype.number(100),
  eyes: faker.random.words(),
  skin: faker.random.words(),
  hair: faker.random.words(),
  secoundaryLanguage: faker.random.words(),
};

const name: Name = {
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  surName: faker.name.lastName(),
};

const modifier: Modifier = {
  strength: faker.datatype.number({ min: 1, max: 20 }),
  dexterity: faker.datatype.number({ min: 1, max: 20 }),
  constitution: faker.datatype.number({ min: 1, max: 20 }),
  intelligence: faker.datatype.number({ min: 1, max: 20 }),
  wisdom: faker.datatype.number({ min: 1, max: 20 }),
  charisma: faker.datatype.number({ min: 1, max: 20 }),
};

const armorClass: ArmorClass = {
  armor: faker.datatype.number({ min: 1, max: 20 }),
  shield: faker.datatype.number({ min: 1, max: 20 }),
  naturalArmor: faker.datatype.number({ min: 1, max: 20 }),
  deflection: faker.datatype.number({ min: 1, max: 20 }),
  misc: faker.datatype.number({ min: 1, max: 20 }),
};

const skills: Skill[] = [];

const equipaments: Equipament[] = [];

const _class : Class = {
  name: 'Barbarian',
  description: 'A fierce warrior of primitive background who can enter a battle rage',
  hitDice: 1,
  hitDiceType: 12,
  primaryAbility: 'Strength',
  savingThrows: ['Strength', 'Constitution'],
  armorProficiencies: ['Light', 'Medium', 'Heavy', 'Shields'],
  weaponProficiencies: ['Simple', 'Martial'],
};

const character = (
  caracteristicParam?: Caracteristic,
  modifierParam?: Modifier,
): Character =>
  new Character(
    faker.datatype.uuid(),
    name,
    caracteristicParam ?? caracteristic,
    faker.datatype.number(),
    modifierParam ?? modifier,
    skills,
    faker.datatype.string(),
    armorClass,
    equipaments,
    faker.datatype.number(),
  );

describe('Character tests', () => {
  it('should create a character', () => {
    expect(character()).toBeDefined();
  });

  it('should caracteristic age is not valid', () => {
    const invalidMockCaracteristic = caracteristic;
    const age = 1000;
    invalidMockCaracteristic.age = age;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.age).toBe(age);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('age');
  });

  it('should caracteristic heigth is not valid (max)', () => {
    const invalidMockCaracteristic = caracteristic;
    const height = 1000;
    invalidMockCaracteristic.height = height;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.height).toBe(height);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('height');
  });

  it('should caracteristic heigth is not valid (min)', () => {
    const invalidMockCaracteristic = caracteristic;
    const height = 10;
    invalidMockCaracteristic.height = height;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.height).toBe(height);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('height');
  });

  it('should caracteristic class is not valid', () => {
    const invalidMockCaracteristic = caracteristic;
    const class_ = null;
    invalidMockCaracteristic.class = class_;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.class).toBe(class_);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('class');
  });

  it('should caracteristic weight is not valid', () => {
    const invalidMockCaracteristic = caracteristic;
    const weight = null;
    invalidMockCaracteristic.weight = weight;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.weight).toBe(weight);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('weight');
  });

  it('should caracteristic secoundaryLanguage is not valid', () => {
    const invalidMockCaracteristic = caracteristic;
    const secoundaryLanguage = null;
    invalidMockCaracteristic.secoundaryLanguage = secoundaryLanguage;
    const mockCharacter = character(invalidMockCaracteristic);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Caracteristic',
    );

    expect(mockCharacter.caracteristic.secoundaryLanguage).toBe(
      secoundaryLanguage,
    );
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('secoundaryLanguage');
  });

  it('should modifier strength is not be null', () => {
    const invalidMockModifier = modifier;
    const strength = null;
    invalidMockModifier.strength = strength;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.strength).toBe(strength);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('strength');
    expect(validationEntity.result['strength']).toBe(
      'Strength should not be null',
    );
  });

  it('should modifier strength is not be zero', () => {
    const invalidMockModifier = modifier;
    const strength = 0;
    invalidMockModifier.strength = strength;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.strength).toBe(strength);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('strength');
    expect(validationEntity.result['strength']).toBe(
      'Strength should not be less than 0',
    );
  });

  it('should modifier dexterity is not be null', () => {
    const invalidMockModifier = modifier;
    const dexterity = null;
    invalidMockModifier.dexterity = dexterity;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.dexterity).toBe(dexterity);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('dexterity');
    expect(validationEntity.result['dexterity']).toBe(
      'Dexterity should not be null',
    );
  });

  it('should modifier dexterity is not be zero', () => {
    const invalidMockModifier = modifier;
    const dexterity = 0;
    invalidMockModifier.dexterity = dexterity;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.dexterity).toBe(dexterity);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('dexterity');
    expect(validationEntity.result['dexterity']).toBe(
      'Dexterity should not be less than 0',
    );
  });

  it('should modifier constitution is not be null', () => {
    const invalidMockModifier = modifier;
    const constitution = null;
    invalidMockModifier.constitution = constitution;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.constitution).toBe(constitution);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('constitution');
    expect(validationEntity.result['constitution']).toBe(
      'Constitution should not be null',
    );
  });

  it('should modifier constitution is not be zero', () => {
    const invalidMockModifier = modifier;
    const constitution = 0;
    invalidMockModifier.constitution = constitution;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.constitution).toBe(constitution);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('constitution');
    expect(validationEntity.result['constitution']).toBe(
      'Constitution should not be less than 0',
    );
  });

  it('should modifier intelligence is not be null', () => {
    const invalidMockModifier = modifier;
    const intelligence = null;
    invalidMockModifier.intelligence = intelligence;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.intelligence).toBe(intelligence);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('intelligence');
    expect(validationEntity.result['intelligence']).toBe(
      'Intelligence should not be null',
    );
  });

  it('should modifier intelligence is not be zero', () => {
    const invalidMockModifier = modifier;
    const intelligence = 0;
    invalidMockModifier.intelligence = intelligence;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.intelligence).toBe(intelligence);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('intelligence');
    expect(validationEntity.result['intelligence']).toBe(
      'Intelligence should not be less than 0',
    );
  });

  it('should modifier wisdom is not be null', () => {
    const invalidMockModifier = modifier;
    const wisdom = null;
    invalidMockModifier.wisdom = wisdom;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.wisdom).toBe(wisdom);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('wisdom');
    expect(validationEntity.result['wisdom']).toBe('Wisdom should not be null');
  });

  it('should modifier wisdom is not be zero', () => {
    const invalidMockModifier = modifier;
    const wisdom = 0;
    invalidMockModifier.wisdom = wisdom;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.wisdom).toBe(wisdom);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('wisdom');
    expect(validationEntity.result['wisdom']).toBe(
      'Wisdom should not be less than 0',
    );
  });

  it('should modifier charisma is not be null', () => {
    const invalidMockModifier = modifier;
    const charisma = null;
    invalidMockModifier.charisma = charisma;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.charisma).toBe(charisma);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('charisma');
    expect(validationEntity.result['charisma']).toBe(
      'Charisma should not be null',
    );
  });

  it('should modifier charisma is not be zero', () => {
    const invalidMockModifier = modifier;
    const charisma = 0;
    invalidMockModifier.charisma = charisma;
    const mockCharacter = character(null, invalidMockModifier);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'Modifier',
    );

    expect(mockCharacter.modifier.charisma).toBe(charisma);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('charisma');
    expect(validationEntity.result['charisma']).toBe(
      'Charisma should not be less than 0',
    );
  });

  it('should current hit point is not be null', () => {
    const mockCharacter = character(null, null);
    const invalidClass = _class;
    invalidClass.hitDiceType = null;
    
    mockCharacter.calculateHitPoints(_class);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'HitPoints',
    );

    expect(mockCharacter.hitPoints.current).toBe(null);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('current');
    expect(validationEntity.result['current']).toBe(
      'Current should not be null',
    );
  });

  it('should current hit point is not be zero', () => {
    const invalidMockModifier = modifier;
    invalidMockModifier.constitution = 0;

    const mockCharacter = character(null, invalidMockModifier);
    const invalidClass = _class;
    invalidClass.hitDiceType = 0;
    
    mockCharacter.calculateHitPoints(_class);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'HitPoints',
    );

    expect(mockCharacter.hitPoints.current).toBe(0);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('current');
    expect(validationEntity.result['current']).toBe(
      'Current should not be less than 0',
    );
  });

  it('should max hit point is not be null', () => {
    const mockCharacter = character(null, null);
    const invalidClass = _class;
    invalidClass.hitDiceType = null;
    
    mockCharacter.calculateHitPoints(_class);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'HitPoints',
    );

    expect(mockCharacter.hitPoints.current).toBe(null);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('max');
    expect(validationEntity.result['max']).toBe(
      'Max should not be null',
    );
  });

  it('should max hit point is not be zero', () => {
    const invalidMockModifier = modifier;
    invalidMockModifier.constitution = 0;

    const mockCharacter = character(null, invalidMockModifier);
    const invalidClass = _class;
    invalidClass.hitDiceType = 0;
    
    mockCharacter.calculateHitPoints(_class);

    const validationEntity = mockCharacter.validationEntity.find(
      (x) => x.objectName === 'HitPoints',
    );

    expect(mockCharacter.hitPoints.current).toBe(0);
    expect(validationEntity.isValid).toBeFalsy();
    expect(validationEntity.result).toHaveProperty('max');
    expect(validationEntity.result['max']).toBe(
      'Max should not be less than 0',
    );
  });
});
