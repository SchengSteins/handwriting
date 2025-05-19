//大数相加
function largeNumberPlus(str1, str2) {
    // let num1 = BigInt(str1)
    // let num2 = BigInt(str2)
    // return num1 + num2 + ''
    // write code here
    let maxLen = Math.max(str1.length, str2.length);
    str1 = str1.padStart(maxLen, 0);
    str2 = str2.padStart(maxLen, 0);
    let t = 0,
        carry = 0,
        sum = "";
    for (let i = maxLen - 1; i >= 0; i--) {
        t = parseInt(str1[i]) + parseInt(str2[i]) + carry;
        carry = Math.floor(t / 10);
        sum = (t % 10) + sum;
    }
    if (carry == 1) {
        sum = "1" + sum;
    }
    return sum;
}
let str1 = "9007199254740991";
let str2 = "1234567899999999999";
console.log(largeNumberPlus(str1, str2));

//力扣941有效山脉
var validMountainArray = function (arr) {
    const N = arr.length;
    let i = 0;
    while (i + 1 < N && arr[i] < arr[i + 1]) {
        i++;
    }
    if (i === 0 || i === N - 1) {
        return false;
    }
    while (i + 1 < N && arr[i] > arr[i + 1]) {
        i++;
    }
    return i === N - 1;
};

//满足和的最短组合
let arr = [1, 4, 2, 4, 5, 6, 3, 1, 2], target = 10
function findArray(nums, target) {
    // write code here
    let res = new Array(nums.length + 1)
    const dfs = (path, target, index) => {
        if (target == 0 && path.length < res.length) {
            res = path.slice()
        }
        for (let i = index + 1; i < nums.length; i++) {
            dfs([...path, nums[i]], target - nums[i], i)
        }
    }
    dfs([], target, -1)
    return res.length > nums.length ? [] : res
}
console.log(findArray(arr, target));