import { HitPoint } from './hit-point';
import { Speed } from './speed';

export class Caracteristic {
  race: string;
  class: string;
  antecedent: string;
  alignment: string;
  age: number;
  height: number;
  weight: number;
  eyes: string;
  skin: string;
  hair: string;
  speed: Speed;
  hitPoints: HitPoint;
  secoundaryLanguage: string;

  constructor(
    race,
    classCharacter,
    antecedent,
    alignment,
    age,
    height,
    weight,
    eyes,
    skin,
    hair,
    secondaryLanguage,
  ) {
    this.race = race;
    this.class = classCharacter;
    this.antecedent = antecedent;
    this.alignment = alignment;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.eyes = eyes;
    this.skin = skin;
    this.hair = hair;
    this.secoundaryLanguage = secondaryLanguage;
    this.calculateHitPoints();
    this.calculateSpeed();
  }

  private calculateHitPoints() {
    //TODO: calcular a partir da classe + raça
    this.hitPoints = new HitPoint(0, 10, 10);
  }

  private calculateSpeed() {
    //TODO: calcular a partir da raça
    this.speed = new Speed(30, 'ft');
  }
}
