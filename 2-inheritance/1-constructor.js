var Person = function (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.talk = function() {
    console.log('hello');
}
var tom = new Person('tom', 23);