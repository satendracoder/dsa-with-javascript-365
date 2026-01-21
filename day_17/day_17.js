var MyHashSet = function() {
    this.size = 1000;
    this.buckets = Array.from({ length: this.size }, () => []);
};

MyHashSet.prototype._hash = function(key) {
    return key % this.size;
};

MyHashSet.prototype.add = function(key) {
    const idx = this._hash(key);
    if (!this.buckets[idx].includes(key)) {
        this.buckets[idx].push(key);
    }
};

MyHashSet.prototype.remove = function(key) {
    const idx = this._hash(key);
    this.buckets[idx] = this.buckets[idx].filter(v => v !== key);
};

MyHashSet.prototype.contains = function(key) {
    const idx = this._hash(key);
    return this.buckets[idx].includes(key);
};
