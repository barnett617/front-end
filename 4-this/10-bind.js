var tom = {
    name: 'Tom',
    func: function(type, desc, log) {
        if (type && desc) {
            if (log) {
                console.log(log);
            }
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
print(tom.func.bind(jerry, 'mouse', 'small')('Jerry comes at ' + new Date()));
print(tom.func.bind(me)());
// Tom is a big cat
// Jerry comes at Fri Apr 24 2020 18:48:32 GMT+0800 (GMT+08:00)
// Jerry is a small mouse
// Just me

// bind函数接收第一个参数用于作为新绑定的this,后续可选参数作为绑定时传入该函数的参数
// 返回一个绑定后的函数,该函数并不立即调用,并且在以后的调用时仍可传入新的参数
Function.prototype.myBind = function() {
    // 调用bind的this即是要改变this的函数
    var func = this;
    // 拷贝一份参数,arguments是一个类数组,无法直接调用数组的方法
    var args = Array.prototype.slice.call(arguments);
    // 参数第一个是调用当前函数的this对象
    // 这里从arguments中获取调用bind函数的this,也可以直接从函数形参中取
    var object = args.shift();
    // 首选确定bind函数返回的是一个函数,而不是什么确定的值
    // 因为js中函数是一等公民,所以可以想象为同样返回了一个变量,只不过这个变量可以执行
    // 这里会产生闭包,当bind函数返回后,bind函数内的变量仍未被回收,并且在外部新函数调用时可以访问到
    return function() {
        // 这里的arguments已经是调用新函数时传入的新参数
        // 新的函数被执行时要有使用新this和新参数执行的结果返回
        // 因为最终执行时调用了apply，所以没有对新this做判空处理，由apply内部去做
        return func.apply(object, args.concat(Array.prototype.slice.call(arguments)));
    }
}

print(tom.func('cat', 'big'));
print(tom.func.myBind(jerry, 'mouse', 'small')('Jerry comes at ' + new Date()));
print(tom.func.myBind(me)());
print(tom.func.myBind()());

// Tom is a big cat
// Jerry comes at Fri Apr 24 2020 18:48:32 GMT+0800 (GMT+08:00)
// Jerry is a small mouse
// Just me
// Just undefined