var arr = [1,2,3,'test',4,{a: 5},6];
// 从arr[1]到arr[6]但不包含arr[6]拷贝出新数组
var copy = arr.slice(1, 6);
console.log(copy);
// [ 2, 3, 'test', 4, { a: 5 } ]
// 浅拷贝无法对引用类型进行内存的拷贝，只能对原始类型的值进行拷贝，所以对于引用类型的变量，拷贝和原数组指向同一块内存
arr[5].a = 7;
console.log(copy);
// [ 2, 3, 'test', 4, { a: 7 } ]