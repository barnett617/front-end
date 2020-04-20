var arr = [1,2,3,'test',4];
var result = arr.reduceRight((acc, cur) => {
    return acc + cur;
})
console.log(result);
// 4test321