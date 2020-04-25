// 这就叫链式调用(统一收敛异常捕获)
// 链式调用依赖于上一个 then 中返回了新的 promise 对象
doSomething().then((data) => {
    return doSomethingElse(data);
}).then((data) => {
    return doThirdThing(data);
}).then((data) => {
    console.log('All well done: ' + data);
}).catch(failureCallback);
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
function doSomethingElse(result, ) {
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