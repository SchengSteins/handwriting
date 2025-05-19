// hash路由
class Route {
    constructor() {
        // 路由存储对象
        this.routes = {}
        // 当前hash
        this.currentHash = ''
        // 绑定this，避免监听时this指向改变
        this.freshRoute = this.freshRoute.bind(this)
        this.register = this.register.bind(this)
        // 监听
        window.addEventListener('load', this.freshRoute)
        window.addEventListener('hashchange', this.freshRoute)
    }
    // 存储
    register(path, cb) {
        this.routes[path] = cb || function () { }
    }
    // 更新
    freshRoute() {
        this.currentHash = location.hash.slice(1) || '/'
        this.routes[this.currentHash]()
    }
}