import { Injectable } from '@nestjs/common';
import { PfcServiceSumValue } from '../interfaces/pfc.interface';

@Injectable()
export class PfcService {
  public calcByWeight(baseRate: number, weight: number): number {
    return this.roundToHundredths((baseRate / 100) * weight);
  }

  public sum(values: PfcServiceSumValue[]): PfcServiceSumValue {
    let proteins = 0;
    let fats = 0;
    let carbohydrates = 0;

    for (let i = 0; i < values.length; i++) {
      proteins += values[i].proteins;
      fats += values[i].fats;
      carbohydrates += values[i].carbohydrates;
    }

    return {
      proteins: this.roundToHundredths(proteins),
      fats: this.roundToHundredths(fats),
      carbohydrates: this.roundToHundredths(carbohydrates),
    };
  }

  private roundToHundredths(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
