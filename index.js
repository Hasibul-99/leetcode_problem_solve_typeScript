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
function preorderTraversal(root) {
    var walk = function (node, result) {
        if (result === void 0) { result = []; }
        if (!node)
            return result;
        result.push(node.val);
        walk(node.left, result);
        walk(node.right, result);
        return result;
    };
    return walk(root, []);
}
;
console.log("preorderTraversal", preorderTraversal([1, null, 2, 3]));
