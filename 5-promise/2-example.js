var promise = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            console.log('done')
            var endTime = new Date();
            resolve(endTime);
        }, 0);
    } catch (e) {
        reject(e);
    }
})
promise.then((data) => {
    console.log('success: ' + data);
}, (err) => {
    console.log('fail: ' + err);
})

// done
// success: Sat Apr 25 2020 11:26:10 GMT+0800 (GMT+08:00)