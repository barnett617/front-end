// 这一版是对防抖函数进行优化，避免因为增加防抖策略而丢失原本函数的this指向
var input = document.getElementById("input");
input.addEventListener('input', debounce(autoTip, 2000, true));

function autoTip(value) {
  console.log('对' + value + '进行自动联想');
}

// 细微调整，如果希望第一次输入立刻执行则增加控制
// 对于输入智能联想一般不会由此需求
// 而且这里还可以再优化，因为第一次的联想会调用两次
function debounce(fn, interval, immediate) {
  var timer;
  return function(e) {
    if (immediate && !timer) fn.call(this, e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, e.target.value);
    }, interval)
  }
}