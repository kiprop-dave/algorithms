
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


function averageOfLevels(root: TreeNode | null): number[] {
  if(root === null) {
    return [];
  }
  let queue:TreeNode[] = [];
  let levelAvg:number[] = [];
  queue.push(root);
  let l = queue.length;
  while(l !== 0){
    let levelSum:number = 0;
    for(let i = 0; i < l; i++){
      let f = queue.shift();
      levelSum += f.val;
      if(f.left !== null){
        queue.push(f.left);
      }
      if(f.right !== null){
        queue.push(f.right);
      }
    }
    levelAvg.push(levelSum/l);
    l = queue.length;
  }
  return levelAvg;
};
