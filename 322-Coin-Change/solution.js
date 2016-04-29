/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    "use strict"
    let dp = []
    for (let i = 0; i <= amount; i ++) {
        if (i === 0){
            dp[i] = 0
        } else {
            let min = null
            for (let j = 0; j < coins.length; j ++) {
                let coin = coins[j]
                if (coin <= i) {
                    if (typeof dp[i - coin] !== 'number') continue;
                    let val = dp[i - coin] + 1
                    if (min === null ||  val < min) {
                        min = val
                    }
                }
            }
            dp[i] = min
        }
    }
    return typeof dp[amount] === 'number' ? dp[amount] : -1 
};