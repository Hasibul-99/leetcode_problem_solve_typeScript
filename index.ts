<<<<<<< HEAD
function sum(num1: number, num2: number): number {
    return num1 + num2;
};

console.log("sum", sum(10, 6));
=======

// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function sortedArrayToBST(nums: number[], left = 0, right = nums.length): TreeNode | null {
    if (left > right) return null;

    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = sortedArrayToBST(nums, left, mid + 1);
    root.right = sortedArrayToBST(nums, mid + 1, right);

    return root;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
>>>>>>> ffe279716ead820589240287be886658cd19afc3
