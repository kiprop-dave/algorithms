/* Given a m * n matrix mat of ones (representing soldiers) and zeros 
 * (representing civilians), return the indexes of the k weakest rows 
 * in the matrix ordered from the weakest to the strongest.
 * A row i is weaker than row j, if the number of soldiers in row i is
 * less than the number of soldiers in row j, or they have the same
 * number of soldiers but i is less than j. Soldiers are always stand
 * in the frontier of a row, that is, always ones may appear first and
 * then zeros.
 * Solution:
 * 1. Create an array of objects with the sum of each row and the index
 * 2. Sort the array by the sum
 * 3. Return the first k indexes
 * Time Complexity: O(m * n)
  */


function kWeakestRows(mat: number[][], k: number): number[] {
  const sums = mat.reduce((acc: { sum: number, index: number }[], curr, i) => {
    acc.push({ sum: curr.reduce((a, c) => a + c, 0), index: i });
    return acc;
  }, []).sort((a, b) => a.sum - b.sum);
  return sums.map((el) => el.index).slice(0, k);
};
