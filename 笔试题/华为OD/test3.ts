function calculateStringDistance(strA: string, strB: string): number {
  const m = strA.length
  const n = strB.length

  // 创建dp数组并初始化为最大值
  const dp: number[][] = Array(m + 1)
    .fill(0)
    .map(() => Array(n + 1).fill(Number.MAX_SAFE_INTEGER))

  // 初始化起点
  dp[0][0] = 0

  // 填充dp数组
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0
        continue
      }

      if (i === 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1)
        continue
      }

      if (j === 0) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1)
        continue
      }

      // 计算水平和垂直移动的最小值
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1

      // 如果字符相同，考虑对角线移动
      if (strA[i - 1] === strB[j - 1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + 1)
      }
    }
  }

  return dp[m][n]
}

// 测试代码
const strA = 'ABCABBA'
const strB = 'CBABAC'
const result = calculateStringDistance(strA, strB)
console.log(`字符串A: ${strA}`)
console.log(`字符串B: ${strB}`)
console.log(`最短距离: ${result}`)
