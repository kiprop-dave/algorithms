// Find the judge of a town

// Input: number of people in town, array of trust relationships
// Output: the judge of the town, or -1 if there is no judge

function findJudge(n: number, trust: number[][]): number {
  let trustMap = new Map<number, Set<number>>();
  let trustedByMap = new Map<number, Set<number>>();

  trust.forEach((pair) => {
    let [truster, trusted] = pair;
    if (!trustMap.has(truster)) {
      trustMap.set(truster, new Set<number>());
    }
    trustMap.get(truster).add(trusted);

    if (!trustedByMap.has(trusted)) {
      trustedByMap.set(trusted, new Set<number>());
    }
    trustedByMap.get(trusted).add(truster);
  });

  for (let i = 1; i <= n; i++) {
    if (trustedByMap.has(i) && trustedByMap.get(i).size === n - 1) {
      if (!trustMap.has(i)) {
        return i;
      }
    }
  }
  return -1;
}
