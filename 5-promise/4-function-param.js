function stepOne (next) {
    setTimeout(() => {
        console.log('Step one done');
        next(lastStep);
    }, 0)
}
function stepTwo(next) {
    setTimeout(() => {
        console.log('Step two done');
        var bar = 'bar';
        next(bar);
    }, 0)
}
function lastStep(lastResult) {
    console.log(lastResult);
}
stepOne(stepTwo);