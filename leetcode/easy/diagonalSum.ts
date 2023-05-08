/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal
and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

function diagonalSum(mat: number[][]): number {
  if(mat.length < 2) return mat[0][0];
  let sum = 0,i = 0,j = mat.length - 1;
  while(i < mat.length && j >= 0){
    if(i !== j){
      sum += mat[i][j];
    }
    sum += mat[i][i]
    i++;
    j--;
  }
  return sum;
};
