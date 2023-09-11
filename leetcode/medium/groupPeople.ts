/*
* There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
* You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3,
* then person 1 must be in a group of size 3.
* Return a list of groups such that each person i is in a group of size groupSizes[i].
* Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them.
* It is guaranteed that there will be at least one valid solution for the given input.
*
* Solution: 
* 1. Create a hash table to store the group size as the key and the index of the group as the value
* 2. Iterate through the groupSizes array
* 3. If the current group size is in the hash table and the current group size is less than the group size, then add the current index to the group
* 4. If the current group size is not in the hash table, then create a new group with the current index
* 5. Remove all undefined values from the result array
* Time Complexity: O(n)
  */


function groupThePeople(groupSizes: number[]): number[][] {
  let hash: Record<number, number> = {};
  let res: number[][] = [];
  for (let i = 0; i < groupSizes.length; i++) {
    const curr = groupSizes[i];
    if (curr in hash) {
      const list = res[hash[curr]];
      if (list.length < curr) {
        list.push(i);
      } else {
        res[i] = [i];
        hash[curr] = i;
      }
    } else {
      res[i] = [i];
      hash[curr] = i;
    }
  }
  return res.filter((el) => el !== undefined);
};
