export class Fibonacci {
  recursive(n: number): number {
    if (n <= 1) {
      return n;
    }

    return this.recursive(n - 2) + this.recursive(n - 1);
  }

  iterative(n: number): number {
    const solveds: number[] = [0, 1];

    if (n <= 1) {
      return n;
    }

    for (let i = 2; i <= n; i++) {
      if (!solveds[i]) {
        solveds.push(solveds[i - 1] + solveds[i - 2]);
      }
    }

    return solveds[n];
  }
}
