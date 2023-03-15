type TreeNode struct {
    Val int
    Left *TreeNode
    Right *TreeNode
}

func sumNumbers(root *TreeNode) int {
    return sumNodes(root,0)
}

func sumNodes(root *TreeNode,sum int) int {
    if root == nil {
        return 0
    }
    sum = sum * 10 + root.Val
    
    if root.Left == nil && root.Right == nil {
        return sum
    }

    return sumNodes(root.Left,sum) + sumNodes(root.Right,sum)
}
