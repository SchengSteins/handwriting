//Object.create:将传入的对象作为原型创建一个对象
function create(obj) {
    //新建一个函数作为构造函数
    function F() { }
    //将函数的原型对象指向obj
    F.prototype = obj
    //执行构造函数
    return new F()
}