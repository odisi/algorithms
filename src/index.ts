import { Fibonacci } from "@src/dynamic-programming/fibonacci";

const fib = new Fibonacci();

const n = 45;

console.time("Recursive fibonacci");

const rec = fib.recursive(n);

console.timeEnd("Recursive fibonacci");

console.log(rec);

console.time("Iterative fibonacci");

const it = fib.iterative(n);

console.timeEnd("Iterative fibonacci");

console.log(it);
