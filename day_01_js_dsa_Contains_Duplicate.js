let arr =[1,2,3,4,4,5,6,7,8,9,1];
function containsDuplicate(arr) {
    let numSet = new Set();
    for (let num of arr) {
        if (numSet.has(num)) {
            return true;
        }
        numSet.add(num);
    }
    return false;
}
console.log(containsDuplicate(arr));