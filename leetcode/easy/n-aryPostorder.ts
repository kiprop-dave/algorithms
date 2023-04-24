// Given the root of an n-ary tree, return the postorder traversal of its nodes' values.

class TreeNode {
    val: number
     children: TreeNode[]
     constructor(val?: number) {
         this.val = (val===undefined ? 0 : val)
         this.children = []
     }
 }

function postorder(root: TreeNode | null): number[] {
  if(root === null) return [];
  let output:number[] = [];
  let l = root.children.length;
  for(let i = 0;i < l;i++){
     output.push(...postorder(root.children[i]));
  }
  output.push(root.val);
  return output;
};
