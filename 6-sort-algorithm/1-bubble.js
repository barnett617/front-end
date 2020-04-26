function bubble(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    }
}
var arr = [1,3,4,2,7,9,8];
console.log(arr);
bubble(arr);
console.log(arr);