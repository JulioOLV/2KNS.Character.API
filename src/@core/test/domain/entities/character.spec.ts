import { faker } from '@faker-js/faker';
import { Skill } from 'src/@core/domain/value-objects/skill';
import { Character } from '../../../domain/entities/character';
import { EnumRaces } from '../../../domain/enums/enum-races';
import { ArmorClass } from '../../../domain/value-objects/armor-class';
import { Caracteristic } from '../../../domain/value-objects/caracteristic';
import { Modifier } from '../../../domain/value-objects/modifier';
import { Name } from '../../../domain/value-objects/name';

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

const character = (caracteristicParam?: Caracteristic): Character =>
  new Character(
    faker.datatype.uuid(),
    faker.datatype.uuid(),
    name,
    caracteristicParam ?? caracteristic,
    faker.datatype.number(),
    modifier,
    skills,
    faker.datatype.string(),
    armorClass,
    faker.datatype.number(),
  );

describe('Character tests', () => {
  it('should create a character', () => {
    expect(character()).toBeDefined();
  });

  it('should age is not valid', () => {
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

  it('should heigth is not valid (max)', () => {
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

  it('should heigth is not valid (min)', () => {
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

  it('should class is not valid', () => {
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

  it('should weight is not valid', () => {
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

  it('should secoundaryLanguage is not valid', () => {
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
});
