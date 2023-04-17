function countNegatives(grid: number[][]): number {
  let count = 0;
  grid.forEach((el) => el.forEach((num) => {
    if(num >= 0) return;
    count++;
  }))
  return count;
};
