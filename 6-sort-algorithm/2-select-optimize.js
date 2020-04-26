function select(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var flag = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[flag]) {
                flag = j;
            }
        }
        [arr[i], arr[flag]] = [arr[flag], arr[i]];
    }
}
var arr = [5,3,4,2,7,9,8];
console.log(arr);
select(arr);
console.log(arr);