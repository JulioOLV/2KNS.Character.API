export interface Class {
  name: string;
  description: string;
  hitPoints: number;
  primaryAbility: string;
  proeficienciesResistances: string[];
  proficienciesArmor: string[];
  proficienciesWeapons: string[];
  proeficiencieBonus: number;
  caracteristic: string[];
  knowTricks: number;
  knowSpells: number;
  spellSlots: number;
  rage: number;
  rageDamage: number;
  spellLevel: number;
  knowInvocations: number;
  sorceryPoints: number;
  furtiveAtack: number;
  martialArts: number;
  chiPoints: number;
  displacementWithoutArmor: number;
}