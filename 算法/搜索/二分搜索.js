function search(nums, target) {
    let left = 0, right = nums.length;
    while (left < right) {
        let mid = (right + left) >> 1
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}

function search2(nums, target) {
    let left = 0, right = nums.length
    while (left < right) {
        let mid = (right + left) >> 1
        if (nums[mid] <= target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left - 1
}


arr = [1, 2, 2, 2, 3]
console.log(search(arr, 2));
console.log(search2(arr, 2));