/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    let nums = traverse(root);
    return nums[k-1];
};

function traverse(root:TreeNode | null){
    if(root === null){
        return [];
    }
    let elems = [];
    elems.push(...traverse(root.left));
    elems.push(root.val)
    elems.push(...traverse(root.right));
    return elems;
}
