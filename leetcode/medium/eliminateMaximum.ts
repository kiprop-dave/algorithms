/*
 * You are playing a video game where you are defending your city from
 * a group of n monsters. You are given a 0-indexed integer array dist
 * of size n, where dist[i] is the initial distance in kilometers of the ith monster from the city.
 *
 */


function eliminateMaximum(dist: number[], speed: number[]): number {
  let res = 1;
  const arrivalTimes = dist.map((el, i) => {
    return Math.ceil((el / speed[i]))
  }).sort((a, b) => a - b);
  for (let i = 1; i < arrivalTimes.length; i++) {
    if (arrivalTimes[i] < i + 1) break
    res++
  }
  return res;
};
