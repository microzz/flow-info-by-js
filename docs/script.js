(function () {
  let area = document.querySelector('#box');
  let iliHeight = 24; // 单行滚动的高度
  let speed = 50; // 滚动速度
  let autoScroll;
  let delay = 1000;

  area.innerHTML += area.innerHTML;

  // 开始滚动函数
  function startScroll() {
    autoScroll = setInterval(scrollUp, speed);
    area.scrollTop++;
  }

  // 滚动时调用的函数，进行相关逻辑判断
  function scrollUp() {
    if (area.scrollTop % iliHeight == 0) {
      clearInterval(autoScroll);
      setTimeout(startScroll, delay);
    } else {
      area.scrollTop++;
      if (area.scrollTop >= area.scrollHeight/2) {
        area.scrollTop = 0;
      }
    }
  }

  // 初始滚动
  setTimeout(startScroll, delay)
})();
