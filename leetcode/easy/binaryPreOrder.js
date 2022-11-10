var preorderTraversal = function(root) {
    if(root === null){
        return[];
    }
    const values = [];
    values.push(root.val);
    if(root.left !== null){
        values.push(...preorderTraversal(root.left));
    }
    if(root.right !==null){
        values.push(...preorderTraversal(root.right));
    }
    
    return values;
};