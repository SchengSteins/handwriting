/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 * @param {Map} map 用于存储循环引用对象的地址
 */

function deepClone(obj = {}, map = new Map()) {
    //非对象类型（引用类型）直接返回
    if (typeof obj !== "object") {
        return obj
    }
    //用map防止循环引用
    if (map.get(obj)) {
        return map.get(obj)
    }

    let res = {}
    if (obj instanceof Array ||
        Object.prototype.toString.call(obj) === "[object Array]"
    ) {
        res = []
    }
    map.set(obj, res)
    for (const key in obj) {
        // 保证 key 不是原型属性（hasOwnProperty检测自有属性）
        if (obj.hasOwnProperty(key)) {
            // 递归调用（该方法既可作为对象属性值调用，也可作为数组索引调用，不冲突）
            res[key] = deepClone(obj[key], map);
        }
    }

    return res
}

var a = {
    Light: 1,
    Deep: {
        a,
        b: 2
    },
    arr: [1, 2, 3, 4]
}

let b = deepClone(a)
let c = a
console.log(b);
console.log(c);
a.Deep.b = 3
a.arr[2] = 5
console.log(b);
console.log(c);