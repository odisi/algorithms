export class NumberOfStepsToReduceANumberToZero {
  static execute(num: number): number {
    let rs = 0;

    while (num > 0) {
      if (num % 2 === 1) {
        num -= 1;
      }
      else {
        num >>= 1;
      }

      rs += 1;
    }

    return rs;
  }
}