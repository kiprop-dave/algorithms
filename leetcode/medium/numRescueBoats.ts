/*You are given an array people where people[i] is the weight of the ith person,
and an infinite number of boats where each boat can carry a maximum weight of limit.
Each boat carries at most two people at the same time, provided the sum of
those people is at most limit.

Return the minimum number of boats to carry every given person.
*/

function numRescueBoats(people: number[], limit: number): number {
  people.sort((a,b) => a - b);
  let i = 0,j = people.length - 1,boats = 0;
  while(i <= j){
    if(people[j] + people[i] <= limit){
      i++;
    }
    j--;
    boats++
  }
  return boats;
};
