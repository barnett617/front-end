var count = 0;
var btn = document.getElementById("btn");
document.getElementById("count").innerHTML = count;
btn.addEventListener("click", handleClick);
function handleClick() {
  // 这里可能进行网络请求或DOM操作
  count++;
  console.log('点击按钮');
  document.getElementById("count").innerHTML = count;
}