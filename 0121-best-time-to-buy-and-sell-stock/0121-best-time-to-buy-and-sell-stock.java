public class Solution {

    public int maxProfit(int[] prices) {
    	
    	int maxStock = 0;
    	int minPrice = Integer.MAX_VALUE;
    	
    	for(int i = 0; i < prices.length; i++) {
    		minPrice = Math.min(minPrice, prices[i]); 
    		maxStock = Math.max(maxStock, prices[i] - minPrice); 
    	}
    	
		return maxStock;
    }
}