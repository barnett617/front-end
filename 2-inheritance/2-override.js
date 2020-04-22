function Tool() {
    this.name = 'tool';
    this.created = function() {
        console.log(new Date());
    }
};
Tool.prototype.func = function () {
    console.log("Tool: I can be used");
}
var tool = new Tool();
console.log('tool\'s name: ' + tool.name);
// tool's name: tool
tool.func();
// Tool: I can be use

function IronTool() {

}

IronTool.prototype = Object.create(Tool.prototype);

var hammer = new IronTool();
hammer.func();
// Tool: I can be used
var shaped = function () {
    console.log("shaped: I can be shaped");
}
// 这里就相当于面向对象语言中继承过程中的方法重写了
// 但在js里只相当于修改了 IronTool.prototype 的 func 属性
IronTool.prototype.func = shaped;
IronTool.prototype.func();
// shaped: I can be shaped

