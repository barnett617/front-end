function inputListener() {
  var inputDom = document.getElementById("input");
  inputDom.addEventListener('input', handleInput)
}

function handleInput(e) {
  var spanDom = document.getElementById('content');
  spanDom.innerHTML = e.target.value;
  autoTip(e.target.value);
}

function autoTip(content) {
  // 这里可能有网络请求/接口请求/DOM操作等操作
  console.log('对' + content + '进行自动联想');
}

inputListener();