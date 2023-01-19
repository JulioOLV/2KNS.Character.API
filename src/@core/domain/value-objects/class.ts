export interface Class {
  name: string;
  description: string;
  hitDice: number;
  hitDiceType: number;
  primaryAbility: string;
  savingThrows: string[];
  armorProficiencies: string[];
  weaponProficiencies: string[];
  bonusProeficiencie?: number;
  caracteristic?: string[];
  knowTricks?: number;
  knowSpells?: number;
  spellSlots?: number;
  rage?: number;
  rageDamage?: number;
  spellLevel?: number;
  knowInvocations?: number;
  sorceryPoints?: number;
  furtiveAtack?: number;
  martialArts?: number;
  chiPoints?: number;
  displacementWithoutArmor?: number;
}