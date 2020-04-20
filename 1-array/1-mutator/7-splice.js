var arr = [1,2,3,'test',5];
// 从arr[3]的位置删除1个元素，并插入4
arr.splice(3, 1, 4);
console.log(arr);
// [ 1, 2, 3, 4, 5 ]