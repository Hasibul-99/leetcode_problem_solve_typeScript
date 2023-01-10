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

//  1. if p && q are both null. return true.

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const walk = (first, second) => {
        if (first === null && second === null) return true; 

        console.log("fval", first?.val, "sVal", second?.val);


        if (first?.val !== second?.val) return false;

        return walk(first?.left, second?.left) && walk(first?.right, second?.right);
    };

    return walk(p, q);
};