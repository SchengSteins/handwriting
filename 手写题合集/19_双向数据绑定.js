let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')
//重写属性set、get方法来实现响应式数据
Object.defineProperty(obj, 'text', {
    configurable: true,
    enumerable: true,
    get() {
        console.log('获取了数据');
    },
    set(newVal) {
        console.log('数据更新了');
        input.value = newVal
        span.innerHTML = newVal
    }
})
//消息订阅发布实现视图影响数据
input.addEventListener('keyup', function (e) {
    obj.text = e.target.value
})