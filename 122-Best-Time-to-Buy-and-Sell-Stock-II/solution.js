/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var result = 0
    var current = null
    for(var i = 0; i < prices.length; i++){
        if(prices[i + 1] > prices[i] && current === null){
            // buy
            current = prices[i]
        }else if((prices[i + 1] < prices[i] && current !== null)||(i === prices.length - 1 && current !== null)){
            // sell
            result += prices[i] - current
            current = null
        }
    }
    return result
}