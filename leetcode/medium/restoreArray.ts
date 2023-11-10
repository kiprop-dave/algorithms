/* Given a 2D array of integers adjacentPairs where adjacentPairs[i] = [a, b] indicates that the integers
 * and b are connected. Return the 1D array restoreArray such that
 * Solution: Use a hashmap to strore the adjacent pairs.
 * Find the first or last element with only one adjacent pair.
 * Perform a DFS on the graph.
  */

function restoreArray(adjacentPairs: number[][]): number[] {
  let graph: Record<number, number[]> = {};
  for (const value of adjacentPairs) {
    (graph[value[0]] ?? (graph[value[0]] = [])).push(value[1]);
    (graph[value[1]] ?? (graph[value[1]] = [])).push(value[0]);
  }
  let res: number[] = []
  let i: number
  for (const key in graph) {
    if ((graph[key]).length === 1) {
      i = Number(key);
      break;
    }
  }
  const visited = new Set<number>();
  while (res.length < (adjacentPairs.length + 1)) {
    if (!visited.has(i)) {
      res.push(i);
      visited.add(i);
      i = visited.has(graph[i][0]) ? graph[i][1] : graph[i][0];
    }
  }

  return res;
};
