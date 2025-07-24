export class CountingBits {
  static execute(num: number): number[] {
    let rs = new Array(num + 1).fill(0);

    for (let i = 1; i <= num; i++) {
      rs[i] = rs[i >> 1] + (i & 1);
    }

    return rs;
  }
}