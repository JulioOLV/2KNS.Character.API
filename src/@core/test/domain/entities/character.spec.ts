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
      new Name('John', 'Doe', 'test'),
      new Caracteristic(EnumRaces.DWARF, 'test', 'test', 'test', 100, 1.40, 30, 'test', 'test', 'test', 'test'),
      faker.datatype.number(),
      new Modifier(0, 0, 0, 0, 0, 0),
      [],
      faker.datatype.string(),
      new ArmorClass(0, 0, 0, 0, 0),
      faker.datatype.number(),
    );
    expect(character).toBeDefined();
  });
});