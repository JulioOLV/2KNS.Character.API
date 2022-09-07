export class HitPoint {
  current: number;
  max: number;
  temp: number;

  constructor(temp: number, current: number, max: number) {
    this.temp = temp;
    this.current = current;
    this.max = max;
  }
}
