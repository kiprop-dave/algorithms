const postorderTraversal = function(root) {
    if(root === null){
        return[];
    }
    const values = [];
    if(root.left !== null){
        values.push(...postorderTraversal(root.left));
    }
    if(root.right !==null){
        values.push(...postorderTraversal(root.right));
    }
    
    values.push(root.val);
    return values;
};