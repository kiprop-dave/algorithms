const inorderTraversal = function(root) {
    if(root === null){
        return [];
    }
    
    const result = [];
    if(root.left !== null){ result.push(...inorderTraversal(root.left)) }
    result.push(root.val)
    if(root.right !== null) { result.push(...inorderTraversal(root.right)) }
    return result;
};