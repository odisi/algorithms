# Algorithms

## Dynamic Programming

### src/dynamic-programming/fibonacci.ts

### Problem description
[Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence)

>> In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers, commonly denoted Fn . The sequence commonly starts from 0 and 1, although some authors start the sequence from 1 and 1 or sometimes (as did Fibonacci) from 1 and 2. Starting from 0 and 1, the sequence begins.

### Formula
F(n) = F(n − 1) + F(n − 2)

### Example
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

### Main goal
The main goal is to understand the differences amoung approaches.

#### Using top-down recursive (Fibonacci.recursive method)
That algorithm is inefficient because same number is calculated many times. Example: F(5) calculates three times F(2). 
Other problem depending on input value. The higher the value, the more calls will occur. Sometimes the program can break because it used all regions of memory to manage function calls and their local variables.

#### Using bottom-up iterative (Fibonacci.iterative method)
That algorithm is efficient because every number is calculated only one time. On the other hand, it is necessary to allocate additional space in memory to record data already calculated.