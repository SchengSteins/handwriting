function Parent(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function Child(name, age) {
    Parent.call(this, name);
    this.age = age;
}

// 关键的三步
// 使用父类构造方法的拷贝
var F = function () { };

F.prototype = Parent.prototype;

Child.prototype = new F();

//或者
//子类构造函数调用Parent.call继承父类属性。子类原型对象的_proto_指向父类原型对象，constructor方法指向子类构造函数。
//Children.prototype = Object.create(Parent.prototype)
//Children.prototype.constructor = Children

//避免在子类原型上调用父类的构造函数

var child1 = new Child('kevin', '18');

console.log(child1);