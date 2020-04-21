// 父类
function Shape() {
    this.x = 0;
    this.y = 0;
}
// 父类方法
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('shape moved');
}
// 子类
function Rectangle() {
    // 关键步骤[1]:调用父类的构造方法,相当于super()
    Shape.call(this);
}
// 使用现有的对象(Shape.prototype)提供新创建的对象(Rectangle.prototype)的__proto__
// 关键步骤[2]:效果即子类(函数)原型对象的__proto__指向父类(函数)原型对象
// 在没有给 Rectangle 重置 prototype 前，其只是一个普通的函数，没有和 Shape 形成原型链,其 prototype 指向 Object.prototype,结构如下:
// {
//     constructor:function Rectangle() { … }
//     __proto__:Object {constructor: , __defineGetter__: , __defineSetter__: , …}
// }
// 当重置了 Rectangle 的 prototype 属性后,其 prototype 指向 Shape.prototype,结构如下
// {
//     __proto__:Object {move: , constructor: }
// }
Rectangle.prototype = Object.create(Shape.prototype);
// 关键步骤[3]:给子类建立构造函数和自身的绑定关系
// 在 new Rectangle 时,调用的其实是 Rectangle.prototype 上的 constructor 方法
// 所以如果没有这一步, Rectangle.prototype 是不具备 constructor 属性的
Rectangle.prototype.constructor = Rectangle;

var shape = new Shape();
console.log('shape instanceof Shape: ', shape instanceof Shape);
shape.move(4, 5);

var rectangle = new Rectangle();
console.log('rectangle instanceof Rectangle: ', rectangle instanceof Rectangle);
console.log('rectangle instanceof Shape: ' , rectangle instanceof Shape);
rectangle.move(2, 3);

// shape instanceof Shape:  true
// shape moved
// rectangle instanceof Rectangle:  true
// rectangle instanceof Shape:  true
// shape moved