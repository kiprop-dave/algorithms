// Given a binary tree return the kth largest level or -1 if k is larger than the levels


// Definition for a binary tree node.
 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
 }
 

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  if(!root) return -1;
  let queue:TreeNode[] = [root];
  let levelSums:number[] = [];
  while(queue.length){
    const l = queue.length;
    let sum = 0;
    for(let i = 0; i < l; i++){
      const el = queue.shift()!;
      sum += el.val;
      if(el.right) queue.push(el.right);
      if(el.left) queue.push(el.left);
    }
    levelSums.push(sum);
  }
  if(k > levelSums.length) return -1;
  return levelSums.sort((a,b) => b - a)[k - 1];
};
