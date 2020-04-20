var arr = [1,2,3,'test',4];
var result = arr.map((item, index) => {
    // 对每个元素执行一定操作后返回
    return item += index;
})
console.log(result);
// [ 1, 3, 5, 'test3', 8 ]