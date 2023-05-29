// Given a binary tree, return the level with the largest sum of all

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

function maxLevelSum(root: TreeNode | null): number {
  if(!root) return 1;
  let queue:TreeNode[] = [root];
  let levelSums:number[] = [];
  let index = 1,largest = -100000,level = 1;
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
    if(sum > largest){
      largest = sum;
      level = index;
    }
    index++;
  }
  return level;
};
