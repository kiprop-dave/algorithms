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


function findSecondMinimumValue(root: TreeNode | null): number {
  const inOrder = (root: TreeNode | null):Set<number> => {
    if(root === null){
      return new Set();
    }
    let elems = new Set<number>();
    elems.add(root.val);
    if(root.left !== null){
      for(const el of inOrder(root.left)){
        elems.add(el);
      }
    }
    if(root.right !== null){
      for(const el of inOrder(root.right)){
        elems.add(el);
      }
    }
    return elems;
  }
  let nodes = inOrder(root);
  if(nodes.size < 2){
    return -1;
  }
  let nums:number[] = [];
  for(const val of nodes){
    nums.push(val);
  }
  return nums.sort((a,b) => a - b)[1];
};
