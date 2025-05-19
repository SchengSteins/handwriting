Function.prototype.Mycall = function(context,...args){
    //call只能由函数调用
    if(typeof this !== 'function'){
        throw new TypeError('Error');
    }
    //context为上下文环境，即this将要绑定的对象
    context = context || window;
    //给该对象创建一个方法，该方法即调用call的函数
    context.fn = this;
    const result = context.fn(args);
    //还原对象
    delete context.fn;
    return result;
}

let father ={
    age:30,
    myage: function(){
        return this.age;
    },
}
let son = {
    age:18
}
console.log(father.myage())
console.log(father.myage.Mycall(son))