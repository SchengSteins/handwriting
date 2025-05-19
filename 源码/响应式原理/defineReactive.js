import Dep from './Dep.js';
import observe from './observe.js'

export default function defineReactive(data, key, value) {
    const dep = new Dep()
    if (arguments.length == 2) {
        value = data[key]
    }
    let childOb = observe(value)
    Object.defineProperty(data, key, {
        configurable: true,//能否使用delete、能否修改属性特性、或能否修改访问器属性
        enumerable: true,//对象属性是否可通过for-in循环
        get() {
            //依赖收集
            if (Dep.target) {
                dep.depend()
                if (childOb) {
                    childOb.dep.depend()
                }
            }
            return value;
        },
        set(newValue) {
            if (newValue === value) return;
            value = newValue;
            childOb = observe(newValue)
            //发布订阅
            dep.notify()
        }
    });
}