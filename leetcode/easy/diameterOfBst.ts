/* Find the longest path between two nodes in a binary tree.
 * The path may or may not pass through the root.
 * Solution: DFS
 * Time Complexity: O(n)
 *
 */

/**
 * Definition for a binary tree node.
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


function diameterOfBinaryTree(root: TreeNode | null): number {
  let widest = 0;
  const dfs = (node: TreeNode | null): number => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    widest = Math.max(widest, (left + right));
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return widest;
};
