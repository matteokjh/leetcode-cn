/**
 * https://leetcode-cn.com/problems/lfu-cache/
 * 460. LFU缓存
 * Hard
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
    this.cache = []
    this.frequency = new Map()
    this.value = new Map()
    this.len = capacity
};

// 二分插入调整位置
LFUCache.prototype.adjust = function(key) {
    let arr = this.cache
    let targetFrequency = this.frequency.get(key)
    let pos = 0
    // 找到 key，删除
    while (arr[pos] !== key) pos++
    arr.splice(pos, 1)
    // 二分查找 key 应该插入的位置
    let left = 0
    let right = arr.length
    while(left <= right) {
        let mid = left + ~~((right-left)/2)
        if(this.frequency.get(arr[mid]) < targetFrequency) {
            left = mid+1
        } else right = mid-1
    }
    // 存在相等的情况，位置取最右边的值
    while(this.frequency.get(arr[left]) === targetFrequency) left++
    // 插入
    arr.splice(left, 0, key)
    this.cache = arr
}

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
    if(!this.len) return -1
    let val = this.value.get(key)
    if (val === undefined) {
        return -1
    } else {
        this.frequency.set(key, this.frequency.get(key) + 1)
        this.adjust(key)
        return this.value.get(key)
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
    if(!this.len) return
    // 如果是已存在的 key，更新值，频率，调整位置
    if (this.value.get(key) !== undefined) {
        this.value.set(key, value)
        this.frequency.set(key, this.frequency.get(key) + 1)
        this.adjust(key)
        return
    }
    // 达到最大长度，先删除最长不使用的，也就是第一个元素
    if (this.cache.length === this.len) {
        let k = this.cache.shift()
        this.value.delete(k)
        this.frequency.delete(k)
    }
    this.cache.unshift(key)
    this.value.set(key, value)
    this.frequency.set(key, 0)
    this.adjust(key)
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */