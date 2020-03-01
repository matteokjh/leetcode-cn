// https://leetcode-cn.com/problems/animal-shelter-lcci/
// 面试题 03.06. 动物收容所
// Easy

var AnimalShelf = function() {
    this.cat = []
    this.dog = []
};

/** 
 * @param {number[]} animal
 * @return {void}
 */
AnimalShelf.prototype.enqueue = function(animal) {
    if(animal[1]) {
        this.dog.push(animal[0])
    } else {
        this.cat.push(animal[0])
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueAny = function() {
    if(!this.cat.length && !this.dog.length) return [-1,-1]
    else if(!this.cat.length) return [this.dog.shift(), 1]
    else if(!this.dog.length) return [this.cat.shift(), 0]
    else return this.cat[0] > this.dog[0] ? [this.dog.shift(), 1] : [this.cat.shift(), 0]
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueDog = function() {
    if(this.dog.length) {
        return [this.dog.shift(), 1]
    } else {
        return [-1,-1]
    }
};

/**
 * @return {number[]}
 */
AnimalShelf.prototype.dequeueCat = function() {
if(this.cat.length) {
        return [this.cat.shift(), 0]
    } else {
        return [-1,-1]
    }
};

/**
 * Your AnimalShelf object will be instantiated and called as such:
 * var obj = new AnimalShelf()
 * obj.enqueue(animal)
 * var param_2 = obj.dequeueAny()
 * var param_3 = obj.dequeueDog()
 * var param_4 = obj.dequeueCat()
 */