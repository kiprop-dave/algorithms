// Given a number n, return an array of n+1 elements where each element is the number of 1's in the binary representation of the index.

function countBits(n: number): number[] {
  const sol = new Array<number>(n + 1);
  for (let i = 0; i < sol.length; i++) {
    let sum = 0, curr = i;

    while (curr !== 0) {
      sum += curr % 2;
      curr = Math.floor(curr / 2);
    }
    sol[i] = sum;
  }
  return sol;
};
