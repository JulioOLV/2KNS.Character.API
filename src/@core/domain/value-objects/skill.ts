export class Skill {
  name: string;
  description: string;
  modifier: number;
  proeficiency: boolean;

  constructor(
    name: string,
    description: string,
    modifier: number,
    proeficiency?: boolean,
  ) {
    this.name = name;
    this.description = description;
    this.modifier = modifier;
    this.proeficiency = proeficiency;
  }
}
