//instanceif判断对象是否是指定类型的实例
function myInstanceof(left, right) {
    //通过原型链判断，实例的__proto__ 与 构造函数的prototype
    let proto = Object.getPrototypeOf(left)
    //递归查找，直到找到原型链顶端
    while (proto) {
        if (proto === right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
    return false
}