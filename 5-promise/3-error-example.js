var executor = function(resolve, reject) {
    try {
        setTimeout(() => {
            console.log('done')
            var endTime = new Date();
            resolve(endTime);
        }, 0);
        throw new Error('oop')
    } catch (e) {
        reject(e);
    }
}
var promise = new Promise(executor);
promise.then((data) => {
    console.log('success: ' + data);
}, (err) => {
    console.log('fail: ' + err);
})

// fail: Error: oop
// done