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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let first = traverseTree(p);
    let second = traverseTree(q);
    if(first.length !== second.length){
        return false;
    }
    for(let i = 0; i < first.length; i++){
        if(first[i] === second[i]){
            continue;
        }else{
            return false;
        }
    }
    return true;
};

function traverseTree(node:TreeNode | null){
    if(node === null){
        return [null];
    }
    let elems: Array<number | null> = [];
    elems.push(node.val);
    elems.push(...traverseTree(node.left));
    elems.push(...traverseTree(node.right));
    return elems;
}
