function myNew(fn, ...args) {
  //基于函数的原型创建一个新的对象
  //Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
  let obj = Object.create(fn.prototype)
  //添加属性到新创建的对象上
  let ret = fn.apply(obj, args)
  //返回新的对象(取决于构造函数是否有对象类型返回值)
  return ret instanceof Object ? ret : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  // return new Object()
}

Person.prototype.say = function () {
  console.log(this.age);
};

let p1 = myNew(Person, "lihua", 18);
console.log(p1.name);
console.log(p1);
p1.say();
