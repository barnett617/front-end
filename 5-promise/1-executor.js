var promise = new Promise((resolve, reject) => {
    var result;
    // result = 异步操作
    if (result === 'success') {
        resolve();
    } else {
        reject();
    }
})

var executor = function(resolve, reject) {
    var result;
    // result = 异步操作
    if (result === 'success') {
        resolve();
    } else {
        reject();
    }
}
var promise2 = new Promise(executor);