function getMaxPizzaSum(N: number, sizes: number[]): number {
  // 缓存已计算的结果
  const cache = new Map<string, number>()

  // 记忆化搜索函数
  // l: 左边界索引
  // r: 右边界索引
  // remaining: 剩余可选择的次数
  function search(l: number, r: number, remaining: number): number {
    // 基础情况：没有足够的次数继续选择
    if (remaining <= 1) return 0

    // 处理环形数组的边界
    l = (l + N) % N
    r = r % N

    // 检查缓存
    const key = `${l},${r},${remaining}`
    if (cache.has(key)) return cache.get(key)!

    // "馋嘴"先选择最大的一块
    let left = l
    let right = r
    if (sizes[l] >= sizes[r]) {
      left = (l - 1 + N) % N
    } else {
      right = (r + 1) % N
    }

    // "吃货"可以选择左边或右边，取最大值
    const result = Math.max(
      sizes[left] + search(left - 1, right, remaining - 2),
      sizes[right] + search(left, right + 1, remaining - 2)
    )

    cache.set(key, result)
    return result
  }

  // 尝试每个起始位置，返回最大值
  return Math.max(...Array.from({ length: N }, (_, i) => sizes[i] + search(i - 1, i + 1, N - 1)))
}

// 测试用例
console.log(getMaxPizzaSum(5, [8, 2, 10, 5, 7]))
