var environment = {
    intro: "I am the environment",
    func: () => {
        // 箭头函数func的this只与声明func所在的环境有关
        // fucn声明在environment环境（作用域）中，所以func的this永远是environment
        console.log(this.intro);
    }
}
environment.func();
var tom = {
    name: 'Tom',
    intro: 'I am Tom'
};
var jerry = {
    name: 'Jerry',
    intro: 'I am Jerry'
};
environment.func.call(tom);
environment.func.apply(tom);
var tomFunc = environment.func.bind(tom);
tomFunc();

var transFunc = {
    myFunc: environment.func
}
transFunc.myFunc();