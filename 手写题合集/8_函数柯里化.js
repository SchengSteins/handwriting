function curry(fn, ...args) {
    //函数length属性为形参个数
    return fn.length <= args.length
        ? fn(...args)
        //如果参数不够，先将部分参数进行绑定。bind null，函数的this不改变，起到固定参数的效果
        : curry.bind(null, fn, ...args);
}

function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));