export enum Sex {
  FEMALE = "female",
  MALE = "male",
}
export enum Status {
  CENSORED = 0,
  DIED = 1,
  RECOVERED = 2,
}

export default class CSVDatum {
  age: number;
  sex: Sex;
  bmi: number | null;

  constructor(rawDatum: Record<string, string | number>) {
    this.age = this.getNumber(rawDatum.age);
  }

  private getNumber(value: string | number): number | null {
    if (typeof value === "number") {
      return +value;
    }
    return null;
  }
}
