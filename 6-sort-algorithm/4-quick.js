function quick(arr) {
    if (arr.length <= 1) return arr;
    var flag = Math.floor(arr.length / 2);
    var element = arr.splice(flag, 1)[0];
    var l = [];
    var r = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] < element ? l.push(arr[i]) : r.push(arr[i])
    }
    return quick(l).concat([element], quick(r));
}
var arr = [5,3,4,2,7,9,8];
console.log(arr);
console.log(quick(arr));