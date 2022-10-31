// Given the root of a binary tree,return the level order 
// traversal of its nodes' values. (i.e., from left to right, level by level).

class BinaryTree{
	constructor(){
		this.root = null;
	}

	add(value){
		const newNode = {
			val: value,
			parent: null,
			left: null,
			right: null
		}

		if(!this.root){
			this.root = newNode;
			return;
		}else{
			let current = this.root;
			while(current){
				if(value >= current.val){
					if(current.right === null){
						newNode.parent = current;
						current.right = newNode;
						return;
					}else{
						current = current.right;
					}
				}else{
					if(current.left === null){
						newNode.parent = current;
						current.left = newNode;
						return;
					}else{
						current = current.left
					}
				}
			}
		}
	}
}

const tree = new BinaryTree();
const data = [10,8,15,5,9,12,20];
data.forEach(el => tree.add(el))

// console.log(tree)

function levelOrder(root){
	if(!root){
		return [];
	}
	const elements = [];
	const queue = [];
	queue.push(root);

	while(queue.length !== 0){
		const l = queue.length;
		const h = [];
		for(let i = 0; i < l;i++){
			const first = queue.shift();
			h.push(first.val);
			if(first.left){
				queue.push(first.left);
			}
			if(first.right){
				queue.push(first.right);
			}
		}
		elements.push(h);
	}

	return elements;
}

console.time("bfs")
console.log(levelOrder(tree.root))
console.timeEnd("bfs")




module.exports = BinaryTree;