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
print(tom.func.apply(jerry, ['mouse', 'small']));
print(tom.func.apply(me));
// Tom is a big cat
// Jerry is a small mouse
// Just me

// 区别于call方法，apply方法的第二个参数是一个数组
Function.prototype.myApply = function(thisObj, args) {
    if (!thisObj) thisObj = globalThis;
    thisObj.func = this;
    var result;
    if (!args) {
        result = thisObj.func();
    } else {
        // params用于组装参数字符串，以备eval解析使用
        var params = [];
        for (var i = 0; i < args.length; i++) {
            params.push('args[' + i + ']')
        }
        result = eval('thisObj.func('+ params +')');
        // 解析结果如 thisObj.func(args[0], args[1], ...)
    }
    delete thisObj.func;
    return result
}

print(tom.func('cat', 'big'));
print(tom.func.myApply(jerry, ['mouse', 'small']));
print(tom.func.myApply(me));

// Tom is a big cat
// Jerry is a small mouse
// Just me