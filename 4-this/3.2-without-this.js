function say (intro) {
    console.log(intro);
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
say(tom.intro);
// Hello, I am Tom