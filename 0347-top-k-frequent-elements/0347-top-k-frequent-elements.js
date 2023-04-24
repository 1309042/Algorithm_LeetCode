/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let count = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  
  let result = Object.entries(count); 
  result.sort((a, b) => b[1] - a[1]); 
  
  return result.slice(0, k).map((item) => Number(item[0])); 
};