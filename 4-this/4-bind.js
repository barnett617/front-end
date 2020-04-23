function func() {
    console.log(this.intro);
}
var tom = {
    name: 'Tom',
    intro: 'I am Tom'
};
var jerry = {
    name: 'Jerry',
    intro: 'I am Jerry'
};
var tomFunc = func.bind(tom);
var jerryFunc = tomFunc.bind(jerry);
tomFunc();
// I am Tom
jerryFunc();
// I am Tom