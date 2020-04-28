// 这一版是对防抖函数进行优化，避免因为增加防抖策略而丢失原本函数的this指向
var input = document.getElementById("input");
input.addEventListener('input', debounce(autoTip, 2000));

function autoTip(value) {
  // 确保本函数执行时的this还是input元素
  // console.log(this);
  setTimeout(() => {
    console.log('对' + value + '进行自动联想');
  }, 1000);
}

function debounce(fn, interval) {
  // debounce函数运行于input事件监听绑定期，this指向window
  // console.log(this);
  var timer;
  // 返回添加防抖后的函数
  return function(e) {
    // 触发input回调函数的对象是input元素
    // console.log(this);
    // 每次触发都会清除掉现有的函数执行定时器，直到没有再次触发，等待定时器到时间后执行函数
    clearTimeout(timer);
    // 这里如果是普通匿名函数，则setTimeout回调中的this默认指向window
    // 但如果使用箭头函数，箭头函数内的this默认指向声明箭头函数处的this，这里即input
    timer = setTimeout(() => {
      // fn(args);
      console.log(this);
      // 因为在setTimeout的回调执行目标函数，所以为了避免this丢失，要绑定
      fn.call(this, e.target.value);
    }, interval)
    // timer = setTimeout(function() {
    //   // fn(args);
    //   console.log(this);
    //   // 因为在setTimeout的回调执行目标函数，所以为了避免this丢失，要绑定
    //   fn.call(this, e.target.value);
    // }, interval)
    // 如果用普通函数，又要避免setTimeout回调的this指向window，则需要在外部保留this指向
    // var that = this;
    // timer = setTimeout(function() {
    //   // fn(args);
    //   console.log(that);
    //   // 因为在setTimeout的回调执行目标函数，所以为了避免this丢失，要绑定
    //   fn.call(that, e.target.value);
    // }, interval)
  }
}