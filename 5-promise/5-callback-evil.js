// 这就叫回调地狱
doSomething(function (result) {
    doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
            console.log('All well done: ' + finalResult);
        }, failureCallback)
    }, failureCallback)
}, failureCallback);
function doSomething(callback, error) {
    try {
        setTimeout(() => {
            console.log('something done');
            callback('a');
        }, 0)
    } catch (e) {
        error(e);
    }
}
function doSomethingElse(result, callback, error) {
    console.log(result);
    try {
        setTimeout(() => {
            console.log('something else done');
            callback('b');
        }, 0)
    } catch (e) {
        error(e);
    }
}
function doThirdThing(result, callback, error) {
    console.log(result);
    try {
        setTimeout(() => {
            console.log('third thing done');
            callback('c');
        }, 0)
    } catch(e) {
        error(e);
    }
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
