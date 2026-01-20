var MyHashSet = function() {
    this.set = [];
};

MyHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        this.set.push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    this.set = this.set.filter(val => val !== key);
};

MyHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
};
