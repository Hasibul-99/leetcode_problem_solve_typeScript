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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;

    const walk = (first, second) => {
        if (first === null && second === null) return true; 
        if (first?.val !== second?.val) return false;

        return walk(first?.left, second?.right) && walk(first?.right, second?.left);
    };

    return walk(root.left, root.right);
};