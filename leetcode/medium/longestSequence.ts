// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time

function longestConsecutive(nums: number[]): number {
  const numbers = new Set([...nums]);
  let longest = 0;

  for(const num of numbers){
    if(!numbers.has(num - 1)){
      let sequenceLength = 0;

      while(numbers.has(num + sequenceLength)){
        sequenceLength++;
      }

      longest = Math.max(longest,sequenceLength);
    }
  }
  return longest;
};
