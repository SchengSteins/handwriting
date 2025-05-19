//es5
function Cat(name, color) {
    var stomach = '胃' //私有属性
    var heartbeat = function () { //私有方法
        console.log(heart + '跳')
    }
    this.name = name //公有属性
    this.jump = function () { //公有方法
        console.log('我跳起来了~来追我啊')
    }
}
Cat.descript = '我这个构造函数是用来生产出一只猫的'  //静态属性
Cat.actingCute = function () { 	//静态方法
    console.log('一听到猫我就想到了它会卖萌')
}
Cat.prototype.cleanTheBody = function () { //原型对象上的公有方法\属性
    console.log('我会用唾液清洁身体')
}

//es6
class Cat {
    constructor(name, color) {
        var stomach = '胃' //私有属性
        var heartbeat = function () { //私有方法
            console.log(heart + '跳')
        }
        this.name = name //公有属性
        this.jump = function () { //公有方法
            console.log('我跳起来了~来追我啊')
        }
    }
    static descript = '我这个构造函数是用来生产出一只猫的'  //静态属性
    static actingCute() { 	//静态方法
        console.log('一听到猫我就想到了它会卖萌')
    }
    color = 'white' //原型对象上的公有方法\属性
    cleanTheBody() {
        console.log('我会用唾液清洁身体')
    }
}