var Tool= function() {
    this.func= function() {
        console.log("I can be used");
    }
};
var IronTool = Object.create(Tool);
var shaped = function () {
    console.log("I can be shaped");
}
// 这里就相当于面向对象语言中继承过程中的方法重写了
// 但在js里只相当于修改了IronTool.prototype的func属性
IronTool.prototype.func = shaped;