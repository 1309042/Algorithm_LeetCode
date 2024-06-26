/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n_len = nums.length;
    
    let ans = new Array(2 * n_len);
    
    for(let i = 0; i < n_len; i++) {
        ans[i] = nums[i];
        ans[i + n_len] = nums[i];
    }
    
    return ans;
};
