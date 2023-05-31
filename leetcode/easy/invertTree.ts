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

function invertTree(root: TreeNode | null): TreeNode | null {
  if(!root) return root
  let queue:TreeNode[] = [root];
  while(queue.length){
    const currentNode = queue.shift()!;
    [currentNode.left,currentNode.right] = [currentNode.right,currentNode.left];
    if(currentNode.left) queue.push(currentNode.left);
    if(currentNode.right) queue.push(currentNode.right);
  }
  return root;
};
