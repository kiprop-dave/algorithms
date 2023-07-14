/*
  *Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
  The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas 
and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead
and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
  *Solution: Use a binary search from one to the largest number in the pile while testing each
  *
  */



function minEatingSpeed(piles: number[], h: number): number {
  let ans:number;
  let l = 0,r = Math.max(...piles);
  while(l <= r){
    const mid = Math.floor((l+r)/2);
   const time = timeTaken(piles,mid);
   if(time <= h){
     ans = mid;
     r = mid-1;
   }else{
     l = mid+1;
   }
  }
  return ans;
};

function timeTaken(piles:number[],n:number):number{
  let time = 0;
  for(let i = 0; i < piles.length;i++){
    time += Math.ceil((piles[i])/n);
  }
  return time;
}
