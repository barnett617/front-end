function say () {
    var intro = 'hello world';
    console.log(this.intro);
}
say();
// undefined

var handler = say;
handler();
// undefined

var tom = {
    name: 'Tom',
    intro: "Hello, I am Tom"
};
var jerry = {
    name: 'jerry',
    intro: "Hello, I am Jerry"
}
say.call(tom);
// Hello, I am Tom