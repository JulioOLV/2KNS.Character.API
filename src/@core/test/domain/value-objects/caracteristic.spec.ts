import { faker } from '@faker-js/faker';
import { EnumRaces } from '../../../domain/enums/enum-races';
import { Caracteristic } from '../../../domain/value-objects/caracteristic';

const mockCaracteristic = {
  race: EnumRaces.DWARF,
  age: faker.datatype.number(350),
  height: faker.datatype.number({ min: 90, max: 120 }),
  weight: faker.datatype.number({ min: 50, max: 100 }),
  eyes: faker.random.words(),
  skin: faker.random.words(),
  hair: faker.random.words(),
  secoundaryLanguage: faker.random.words(),
  antecedent: faker.random.words(),
  alignment: faker.random.words(),
  class: faker.random.words(),
};

describe('Caracteristic tests', () => {
  it('should create a new caracteristic', () => {
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      mockCaracteristic.height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic).toBeDefined();
    expect(caracteristic.validationEntity.isValid).toBeTruthy();
  });

  it('should age is not valid', () => {
    const age = 1000;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      age,
      mockCaracteristic.height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic.age).toBe(age);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty('age');
  });

  it('should heigth is not valid (max)', () => {
    const height = 1000;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic.height).toBe(height);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty('height');
  });

  it('should heigth is not valid (min)', () => {
    const height = 10;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic.height).toBe(height);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty('height');
  });

  it('should class is not valid', () => {
    const class_ = null;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      class_,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      mockCaracteristic.height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic.class).toBe(class_);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty('class');
  });

  it('should weight is not valid', () => {
    const weight = null;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      mockCaracteristic.height,
      weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      mockCaracteristic.secoundaryLanguage,
    );
    expect(caracteristic.weight).toBe(weight);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty('weight');
  });

  it('should secoundaryLanguage is not valid', () => {
    const secoundaryLanguage = null;
    const caracteristic = new Caracteristic(
      mockCaracteristic.race,
      mockCaracteristic.class,
      mockCaracteristic.antecedent,
      mockCaracteristic.alignment,
      mockCaracteristic.age,
      mockCaracteristic.height,
      mockCaracteristic.weight,
      mockCaracteristic.eyes,
      mockCaracteristic.skin,
      mockCaracteristic.hair,
      secoundaryLanguage,
    );
    expect(caracteristic.secoundaryLanguage).toBe(secoundaryLanguage);
    expect(caracteristic.validationEntity.isValid).toBeFalsy();
    expect(caracteristic.validationEntity.result).toHaveProperty(
      'secoundaryLanguage',
    );
  });
});
