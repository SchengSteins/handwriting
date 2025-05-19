function myInterval(fn, time) {
  let timer = {
    flag: true
  }
  function interval() {
    if (timer.flag) {
      fn()
      setTimeout(interval, time)
    }
  }
  setTimeout(interval, time)
  //闭包返回控制器
  return timer
}