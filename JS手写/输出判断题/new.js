String('11') == new String('11'); //true
String('11') === new String('11'); //false

//new调用基础类型包装函数返回的是对象

console.log(new String('11'));
console.log(String('11'));