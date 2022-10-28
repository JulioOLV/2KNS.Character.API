import { faker } from '@faker-js/faker';
import { Character } from '../../../domain/entities/character';
import { EnumRaces } from '../../../domain/enums/enum-races';
import { ArmorClass } from '../../../domain/value-objects/armor-class';
import { Caracteristic } from '../../../domain/value-objects/caracteristic';
import { Modifier } from '../../../domain/value-objects/modifier';
import { Name } from '../../../domain/value-objects/name';

describe('Character tests', () => {
  it('should create a character', () => {
    const character = new Character(
      faker.datatype.uuid(),
      faker.datatype.uuid(),
      new Name(
        faker.name.firstName(),
        faker.name.lastName(),
        faker.name.lastName(),
      ),
      new Caracteristic(
        EnumRaces.DWARF,
        faker.random.words(),
        faker.random.words(),
        faker.random.words(),
        faker.datatype.number(500),
        faker.datatype.number({ min: 0.5, max: 2, precision: 0.01 }),
        faker.datatype.number(100),
        faker.random.words(),
        faker.random.words(),
        faker.random.words(),
        faker.random.words(),
      ),
      faker.datatype.number(),
      new Modifier(
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
      ),
      [],
      faker.datatype.string(),
      new ArmorClass(
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
        faker.datatype.number({ min: 1, max: 20 }),
      ),
      faker.datatype.number(),
    );
    expect(character).toBeDefined();
  });
});
