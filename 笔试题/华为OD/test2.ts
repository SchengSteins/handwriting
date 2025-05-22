function sortKids(heights: number[]): number[] {
  // 检查输入是否为空或undefined
  if (!heights || !Array.isArray(heights) || heights.length === 0) {
    return []
  }

  // 检查数组元素是否都是数字
  if (!heights.every((height) => typeof height === 'number' && !isNaN(height))) {
    return []
  }

  const res = [...heights]
  const len = res.length

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0 && i < len - 1 && res[i] < res[i + 1]) {
      // 高位置需要比相邻位置高
      ;[res[i], res[i + 1]] = [res[i + 1], res[i]]
    }
    if (i % 2 === 1 && i < len - 1 && res[i] > res[i + 1]) {
      // 矮位置需要比相邻位置矮
      ;[res[i], res[i + 1]] = [res[i + 1], res[i]]
    }
  }

  return res
}

// 测试代码
const testCases: (number[] | undefined)[] = [
  [4, 1, 3, 5, 2],
  [1, 1, 1, 1, 1],
  [], // 空数组测试
  [1, 2, 3], // 正常数字测试
  [1, 2, 3], // 正常数字测试
]

for (const test of testCases) {
  console.log(`输入: ${test ? test.join(' ') : test}`)
  const result = sortKids(test as number[])
  console.log(`输出: ${result.join(' ')}`)
}
