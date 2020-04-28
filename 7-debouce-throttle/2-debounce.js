function inputListener() {
  var inputDom = document.getElementById("input");
  inputDom.addEventListener('input', handleInput)
}

function handleInput(e) {
  var spanDom = document.getElementById('content');
  spanDom.innerHTML = e.target.value;
  debounced(e.target.value);
}

function autoTip(content) {
  // 这里可能有网络请求/接口请求/DOM操作等操作
  console.log('对' + content + '进行自动联想');
}

// 对复杂函数做防抖策略（可以理解为装饰）
var debounced = debounce(autoTip, 2000);

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

inputListener();