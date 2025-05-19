// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈，
//  然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?

function Loop(m, n) {
    let dp = new Array(m + 1)
    dp[0] = 0
    for (let i = 1; i < dp.length; i++) {
        dp[i] = (dp[i - 1] + n) % i
    }
    return dp[m] + 1
}
console.log(Loop(10, 17));