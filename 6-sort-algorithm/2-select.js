function select(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
var arr = [5,3,4,2,7,9,8];
console.log(arr);
select(arr);
console.log(arr);