var tom = {
    name: 'Tom',
    func: function(type, desc) {
        if (type && desc) {
            return this.name + ' is a ' + desc + ' ' + type;
        } else {
            return 'Just ' + this.name;
        }
    }
}
var jerry = {
    name: 'Jerry',
}
var me = {
    name: 'me',
}
var print = console.log;
print(tom.func('cat', 'big'));
print(tom.func.call(jerry, 'mouse', 'small'));
print(tom.func.call(me));
// Tom is a big cat
// Jerry is a small mouse
// Just me

Function.prototype.myCall = function(obj) {
    // 参数分别判空处理
    if (!obj) obj = globalThis;
    // this是调用本函数的函数
    obj.func = this;
    // 要换用指定的this(这里的obj)去执行要被执行的函数(func)
    // 并且传入指定参数(args)
    // 函数执行结果是返回函数的返回值
    var result;
    if (!arguments[1]) {
        result = obj.func();
    } else {
        var params = [];
        for (var i = 1; i < arguments.length; i++) {
            params.push('arguments[' + i + ']')
        }
        result = eval('obj.func('+ params +')')
        // eval解析出的结果如：obj.func(arguments[1], arguments[2], ...)
    }
    delete obj.func;
    return result;
    // 执行结束要去掉新捆绑的属性
}

print(tom.func('cat', 'big'));
print(tom.func.myCall(jerry, 'mouse', 'small'));
print(tom.func.myCall(me));
// Tom is a big cat
// Jerry is a small mouse
// Just me
