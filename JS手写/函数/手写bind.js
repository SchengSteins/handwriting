Function.prototype.Mybind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  //将调用apply的函数作为变量作为回调函数的闭包参数
  const _this = this
  return function F(...innerArgs) {
    // 因为返回了一个函数，我们可以用new来调用这个函数

    //当函数作为构造函数调用时
    if (this instanceof F) {
      return new _this(args.concat(innerArgs))
    }
    //当函数直接调用时
    return _this.apply(context, args.concat(innerArgs))
  }
}

let father = {
  age: 30,
  //简写的对象方法不能用作构造函数
  myage: function () {
    this.age = 40
  },
}
let son = {
  age: 18
}
father.myage()
let func = father.myage.bind(son)
let func2 = father.myage.Mybind(son)
let a = new func()
console.log(father.myage.prototype)
console.log(func.prototype);
console.log(func2.prototype);