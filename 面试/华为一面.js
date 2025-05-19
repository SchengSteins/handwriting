// 实验室有一排服务器，每个服务器都有一个序列号，序列号可以相同，每个服务器放在一个座位
//上，现在要求你将服务器按照序列号从小到大的顺序摆放好，每个位置只能放一个服务器，请问需要挪动多少个服务器。
// 例如:

// 输入：[1, 1, 1, 4, 3, 2]

// 输出：2

// 解释：只需将服务器4和服务器2的位置对换一下即可，即需要移动2个服务器。
arr = [1, 1, 1, 4, 3, 2]
function sortSum(arr) {
    let arr2 = quickSort(arr)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arr2[i]){
            count++
        }
    }
    return count
}

const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let mid = arr[0]
    let left = []
    let right = []
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < mid) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(mid, quickSort(right))
}

console.log(sortSum(arr))