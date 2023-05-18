// Convert a given roman value to an integer

const romans = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function romanToInt(s: string): number {
  const charNums:number[] = s.split("").map((c) => romans[c]);
  return charNums.reduce((acc,el,i) => el < charNums[i + 1] ?? 0 ? acc - el : acc + el,0);
};
