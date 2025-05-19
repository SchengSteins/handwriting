Object.prototype.a = 'Object'
Function.prototype.a = 'Function'

function Person(){}
let child = new Person()

console.log(Person.a)
console.log(child.a)
console.log(child.__proto__.__proto__.__proto__)

path = '/a/./b/../../c/'

function Unix2path(path){
    let arr = path.split('/')
    arr.shift()
    arr.pop()
    let stack = [arr[0]]
    for(let i = 1; i< arr.length; i++){
        if(arr[i] == '.') continue
        if(arr[i] === '..'){
            stack.pop()
            continue
        }
        stack.push(arr[i])
    }
    return stack
}

console.log(Unix2path(path))

//CSS、原型链、Vue实现数据渲染、vue双向数据绑定、token、扫码登录token、cookie防止窃取、SSL握手、前端安全问题