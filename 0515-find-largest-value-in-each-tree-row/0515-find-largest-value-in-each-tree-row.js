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
var largestValues = function(root) {
    if(root === null) return [];

    let result = [];
    let queue = [root];

    while(queue.length > 0){
        let size = queue.length;
        let maxValue = -Infinity;

        for(let i=0; i<size; i++){
            let node = queue.shift();
            maxValue = Math.max(maxValue, node.val);
            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null){
                queue.push(node.right);
            }
        }
        result.push(maxValue);
    }
    return result;
    
};