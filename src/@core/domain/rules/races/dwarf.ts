import { EnumAttribute } from '../../enums/enum-attribute';
import { EnumRaces } from '../../enums/enum-races';
import { EnumTypeNames } from '../../enums/enum-type-names';
import { Bonus } from '../../value-objects/bonus';
import { Height } from '../../value-objects/height';
import { Names } from '../../value-objects/names';
import { BaseRace } from './base/base-race';

const NAME: EnumRaces = EnumRaces.DWARF;
const BONUS: Bonus[] = [new Bonus(EnumAttribute.CONSTITUTION, 2)];
const MAX_AGE = 350;
const HEIGHT: Height = new Height(90, 120);
const DISPLACEMENT = 9;
const NAMES: Names[] = [
  new Names(EnumTypeNames.MASC, [
    'Adrik',
    'Alberich',
    'Baern',
    'Barendd',
    'Brottor',
    'Bruenor',
    'Dain',
    'Darrak',
    'Delg',
    'Eberk',
    'Einkil',
    'Fargrim',
    'Flint',
    'Gardain',
    'Harbek',
    'Kildrak',
    'Morgran',
    'Orsik',
    'Oskar',
    'Rangrim',
    'Rurik',
    'Taklinn',
    'Thoradin',
    'Thorin',
    'Tordek',
    'Traubon',
    'Travok',
    'Ulfgar',
    'Veit',
    'Vondal',
  ]),
  new Names(EnumTypeNames.FEM, [
    'Amber',
    'Artin',
    'Audhild',
    'Bardryn',
    'Dagnal',
    'Diesa',
    'Eldeth',
    'Falkrunn',
    'Finellen',
    'Gunnloda',
    'Gurdis',
    'Helja',
    'Hlin',
    'Kathra',
    'Kristryd',
    'Ilde',
    'Liftrasa',
    'Mardred',
    'Riswynn',
    'Sannl',
    'Torbera',
    'Torgga',
    'Vistra',
  ]),
  new Names(EnumTypeNames.LAST, [
    'Balderk',
    'Battlehammer',
    'Brawnanvil',
    'Dankil',
    'Fireforge',
    'Frostbeard',
    'Gorunn',
    'Holderhek',
    'Ironfist',
    'Loderr',
    'Lutgehr',
    'Rumnaheim',
    'Strakeln',
    'Torunn',
    'Ungart',
  ]),
];

export class Dwarf extends BaseRace {
  constructor() {
    super(NAME, BONUS, MAX_AGE, HEIGHT, DISPLACEMENT, NAMES);
  }
}
