/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    let result = 0;

    function tree(node) {
        if (node === null) {
            return 0;
        }
        const left = tree(node.left);
        const right = tree(node.right);
        result = Math.max(result, left + right);
        return Math.max(left, right) + 1;
    }

    tree(root);
    return result;
}