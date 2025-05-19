class EventEmitter {
    constructor() {
        this.events = {}
    }
    //订阅
    on(type, callBack) {
        if (!this.events[type]) {
            this.events[type] = [callBack]
        } else {
            this.events[type].push(callBack)
        }
    }
    //取消订阅
    off(type, callBack) {
        if (!this.events[type]) return
        this.events[type] = this.events[type].filters((item) => item !== callBack)
    }
    //执行一次的订阅
    once(type, callBack) {
        function fn() {
            callBack()
            this.off(type, fn)
        }
        this.on(type, fn)
    }
    //触发事件
    emit(type, ...args) {
        this.events[type] && this.events[type].forEach((cb) => cb.apply(this, args))
    }
}