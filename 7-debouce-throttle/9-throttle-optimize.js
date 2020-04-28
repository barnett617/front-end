var count = 0;
document.getElementById("count").innerHTML = count;

var btn = document.getElementById("btn");

var throttled = throttle(handleClick, 2000);
btn.addEventListener("click", throttled);

function handleClick() {
  // 这里可能进行网络请求或DOM操作
  count++;
  console.log(new Date().getMinutes() + '分' + new Date().getSeconds() + '秒执行点击处理');
  document.getElementById("count").innerHTML = count;
}

// 1s内点击3次，应该对第一次点击进行响应
function throttle(fn, interval) {
  var timer;
  var last;
  var lock = false;
  return function() {
    console.log(new Date().getMinutes() + '分' + new Date().getSeconds() + '秒发生点击');
    if (lock) return
    lock = true;
    fn();
    // 在限制时间延迟后释放锁，允许再次响应
    setTimeout(() => {
      lock = false;
    }, interval)
  }
}