// 这就叫链式调用
doSomething().then((data) => {
    return doSomethingElse(data);
}, (err) => {
    failureCallback(err);
}).then((data) => {
    return doThirdThing(data);
}, (err) => {
    failureCallback(err);
}).then((data) => {
    console.log('All well done: ' + data);
}, (err) => {
    failureCallback(err);
});
function doSomething() {
    return new Promise((callback, error) => {
        try {
            setTimeout(() => {
                console.log('something done');
                callback('a');
            }, 0)
        } catch (e) {
            error(e);
        }
    })
}
function doSomethingElse(result) {
    console.log(result);
    return new Promise((callback, error) => {
        try {
            setTimeout(() => {
                console.log('something else done');
                callback('b');
            }, 0)
        } catch (e) {
            error(e);
        }
    })
}
function doThirdThing(result) {
    console.log(result);
    return new Promise((callback, error) => {
        try {
            setTimeout(() => {
                console.log('third thing done');
                callback('c');
            }, 0)
        } catch(e) {
            error(e);
        }
    })
}
function failureCallback(e) {
    console.log('error: ' + e);
}
// something done
// a
// something else done
// b
// third thing done
// All well done: c