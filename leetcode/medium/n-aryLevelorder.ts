// Given an n-ary tree, return the level order traversal of its nodes' values.


//Definition for node.
class Node {
   val: number
   children: Node[]
   constructor(val?: number) {
       this.val = (val===undefined ? 0 : val)
       this.children = []
   }
}
 

function levelOrder(root: Node | null): number[][] {
	if(root === null) return [];
  let levelQueue:Node[] = [];
  let result:number[][] = [];
  levelQueue.push(root);
  while(levelQueue.length){
    const l = levelQueue.length;
    let level:number[] = [];
    for(let i = 0;i < l;i++){
      const firstElem = levelQueue.shift()!;
      level.push(firstElem.val)
      firstElem.children.forEach((elem) => levelQueue.push(elem));
    }
    result.push(level);
  }
  return result;
};
