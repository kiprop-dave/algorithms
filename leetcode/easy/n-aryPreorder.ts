// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.


 //Definition for node.
 class Node {
     val: number
     children: Node[]
     constructor(val?: number) {
        this.val = (val===undefined ? 0 : val)
         this.children = []
     }
}


function preorder(root: Node | null): number[] {
  if(root === null) return [];
  let l = root.children.length;
  let elems:number[] = [];
  elems.push(root.val);
  for(let i = 0;i < l;i++){
    elems.push(...preorder(root.children[i]))
  }
  return elems;
};
