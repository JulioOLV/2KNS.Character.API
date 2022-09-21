import { Bonus } from "../../../value-objects/bonus";
import { Height } from "../../../value-objects/height";
import { Names } from "../../../value-objects/names";

export class BaseRace {
  private _name: string;
  private _bonus: Bonus[];
  private _maxAge: number;
  private _height: Height;
  private _displacement: number;
  private _names: Names[];

  public get name() : string {
    return this._name;
  }

  public get bonus() : Bonus[] {
    return this._bonus;
  }

  public get maxAge() : number {
    return this._maxAge;
  }

  public get height() : Height {
    return this._height;
  }

  public get displacement() : number {
    return this._displacement;
  }

  public get names() : Names[] {
    return this._names;
  }

  constructor(name: string, bonus: Bonus[], maxAge: number, height: Height, displacement: number, names: Names[]) {
    this._name = name;
    this._bonus = bonus;
    this._maxAge = maxAge;
    this._height = height;
    this._displacement = displacement;
    this._names = names;
  }
}