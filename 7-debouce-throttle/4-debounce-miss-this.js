// 这一版是对防抖函数进行优化，避免因为增加防抖策略而丢失原本函数的this指向
var input = document.getElementById("input");
input.addEventListener('input', debounce(autoTip, 2000));

function autoTip(value) {
  // 确保本函数执行时的this还是input元素
  // console.log(this);
  console.log('对' + value + '进行自动联想');
}

function debounce(fn, interval) {
  var timer;
  // 返回添加防抖后的函数
  return function(e) {
    // 每次触发都会清除掉现有的函数执行定时器，直到没有再次触发，等待定时器到时间后执行函数
    clearTimeout(timer);
    timer = setTimeout(() => {
      // fn(args);
      // console.log(this);
      // 因为在setTimeout的回调执行目标函数，所以为了避免this丢失，要绑定
      fn.call(this, e.target.value);
    }, interval)
  }
}