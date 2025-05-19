// 核心动态转移方程
// dp[i][k][0 or 1]
// 0 <= i <= n - 1, 1 <= k <= K
// n 为天数，大 K 为交易数的上限，0 和 1 代表是否持有股票。
// dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
//               max( 今天选择 rest,        今天选择 sell       )

// dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
//               max( 今天选择 rest,         今天选择 buy         )


let prices = [7, 1, 5, 3, 6, 4]
//单买单卖
function maxProfit(prices) {
    let n = prices.length
    let dp = Array.from(new Array(n), () => new Array(2))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        //由于只能购入一次，因此dp[i-1][k-1][0]替换成0
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
    }
    return dp[n - 1][0]
}
console.log(maxProfit(prices));

//多买多卖一次持股1个
function maxProfit2(prices) {
    let n = prices.length
    let dp = Array.from(new Array(n), () => new Array(2))
    dp[0][0] = 0
    dp[0][1] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    }
    return dp[n - 1][0]
}
console.log(maxProfit2(prices));