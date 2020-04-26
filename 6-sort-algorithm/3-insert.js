function insert(arr) {
    var temp;
    var pre;
    for (var i = 1; i < arr.length; i++) {
        pre = i - 1;
        // 拿出的元素
        temp = arr[i];
        // 当未比较到第一个元素并且拿出的元素小于前面的某个元素
        while (pre >= 0 && temp < arr[pre]) {
            // 如果拿出的元素比前一个元素小，则前一个元素后移
            arr[pre+1] = arr[pre];
            pre--;
        }
        // 比到某一个位置，拿出的元素介于两元素大小之间，则插入
        arr[pre+1] = temp;
    }
}
var arr = [5,3,4,2,7,9,8];
console.log(arr);
insert(arr);
console.log(arr);