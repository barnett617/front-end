var arr = [1,2,3,'test',4];
// 每一次比较的结果都是true才返回true
var result = arr.every((item, index) => {
    return item > 0
})
// "test" > 4 => Number("test") > 4 => NaN > 4 => false
console.log(result);
// false
result = arr.every(item => item);
console.log(result);
// true
arr.push(undefined);
result = arr.every(item => item);
console.log(result);
// false