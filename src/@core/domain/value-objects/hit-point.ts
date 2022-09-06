export class HitPoint {
  current: number;
  max: number;
  temp: number;

  constructor(temp: number, current?: number, max?: number) {
    this.temp = temp;

    if (max) {
      this.max = max;
    } else {
      this.calculateMaxHitPoints();
    }

    if (current) {
      this.current = current;
    } else {
      this.calculateCurrentHitPoints();
    }
  }

  damageReceived(damage: number) {
    this.current = this.current - damage;
  }

  healReceived(heal: number) {
    this.current = this.current + heal;
  }

  tempHitPointsReceived(tempHitPoints: number) {
    if (tempHitPoints !== this.temp) {
      this.temp = tempHitPoints;
      this.calculateCurrentHitPoints();
    }
  }

  private calculateCurrentHitPoints() {
    this.current = this.max;

    if (this.temp !== 0) {
      this.current = this.current + this.temp;
    }
  }

  private calculateMaxHitPoints() {
    // TODO: calcular a partir do dado baseado na classe + modificador de constituição
    this.max = 10;
  }
}
