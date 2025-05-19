class LRU {
    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
    }
    get(key) {
        if (this.map.has(key)) {
            let value = this.map.get(key)
            this.map.delete(key)
            this.map.set(key, value)
            return value
        }
        return -1
    }
    put() {
        if (this.map.has(key)) {
            this.map.delete(key)
        }
        this.map.set(key, value)
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}