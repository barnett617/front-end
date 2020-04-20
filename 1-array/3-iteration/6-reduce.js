var arr = [1,2,3,'test',4];
var result = arr.reduce((acc, cur) => {
    // 初始累加器acc若没有初始化则取数组第一个元素
    // 每一次的acc都是上一次的操作结果
    return acc + cur
})
console.log(result);
// 6test4