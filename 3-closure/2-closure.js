function outer() {
    var a = 2;
    function inner() {
        console.log(a);
    }
    return inner;
}
var inner = outer();
inner();
// 2