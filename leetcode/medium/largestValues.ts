/* Given a binary tree, return an array containing the largest value in each level of the tree.
  * Solution:BFS
  *
  */


class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }
  let res: number[] = [];
  let queue: TreeNode[] = [root];
  while (queue.length > 0) {
    res.push(queue.sort((a, b) => b.val - a.val)[0].val);
    const l = queue.length;
    for (let i = 0; i < l; i++) {
      let first = queue.shift()!;
      if (first.left) queue.push(first.left);
      if (first.right) queue.push(first.right);
    }
  }
  return res;
};
