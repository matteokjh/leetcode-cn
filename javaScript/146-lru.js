/**
 * https://leetcode-cn.com/problems/lru-cache
 * LRU缓存机制
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this._capacity = capacity; // 剩余空间
    this.m = new Map; // 存放数据
    this.lru = []; // 最近最少使用
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let a = this.m.get(key)
    let lru = this.lru;
    if(a){
        for(let i=0;i<lru.length;i++){
            if(lru[i] == key){
                lru.splice(i,1)
                lru.push(key)
            }
        }
        return a
    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let b = this.m.get(key);
    let lru = this.lru
    if(b){
        this.m.set(key,value)
        for(let i=0;i<lru.length;i++){
            if(lru[i] == key){
                lru.splice(i,1)
                lru.push(key)
            }
        }
    }else{
        if(this._capacity > 0){
            this.m.set(key,value);
            this._capacity--;
            lru.push(key)
        }else{
            let a = lru.shift();
            this.m.delete(a)
            this.m.set(key,value);
            lru.push(key)
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */