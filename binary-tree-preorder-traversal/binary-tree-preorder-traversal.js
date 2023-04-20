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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root === null) {
        return [];
    }
    
    let left = preorderTraversal(root.left)
    let right = preorderTraversal(root.right)
    let result = [root.val];
    
    for(let i = 0; i < left.length; i++) {
        result.push(left[i])
    }
    
    for(let i = 0; i < right.length; i++) {
        result.push(right[i])
    }
    
    return result;
};