var obj = {
    name: 'obj',
    sayHello: function () {
        console.log(this.name + '\'s method says hello');
    }
}
function sayHello() {
    console.log('funciton declaration says hello');
}
var exp = function() {
    console.log('function expression says hello');
}
obj.sayHello();
sayHello();
exp();
// obj's method says hello
// funciton declaration says hello
// function expression says hello