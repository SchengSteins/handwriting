Array.prototype.myMap = function (callback, thisValue) {
    let arr = Object(this), res = [];
    for (let i = 0; i < arr.length; i++) {
        // 存储运算结果
        res.push(callback.call(thisValue, arr[i], i, arr));
    }
    return res;
}

let arr = [1, 2, 3]
console.log(arr.map((item, index) => {
    arr[index] = item + 2
    return item + 1
}
));
console.log(arr);