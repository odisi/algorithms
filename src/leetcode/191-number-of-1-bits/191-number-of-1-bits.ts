export class NumberOf1Bits {
  static execute(num: number): number {
    let rs = 0;

    while (num > 0) {
      rs += num & 1;

      num >>= 1;
    }

    return rs;
  }
}