var arr = [1,2,3,'test',4];
var result = arr.filter((item, index) => {
    // 所有符合条件的装进新数组
    return typeof item === 'string';
})
console.log(result);
// [ 'test' ]