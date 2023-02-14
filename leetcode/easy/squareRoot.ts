function mySqrt(x: number): number {
    let root:number = x/2;
    let prev = root + 1
    while(prev - root > 0.9 || root - prev > 0.9){
        prev = root
        root -= (root*root - x)/(2*root)
    }
  return ~~root
};
