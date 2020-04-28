var debounced = debounce(function(value) {
  console.log('对' + value + '进行自动联想');
}, 2000);
document.getElementById("input").addEventListener('input', function(e) {
  debounced(e.target.value);
});

function debounce(fn, interval) {
  var timer;
  // 返回添加防抖后的函数
  return function(args) {
    // 每次触发都会清除掉现有的函数执行定时器，直到没有再次触发，等待定时器到时间后执行函数
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, interval)
  }
}