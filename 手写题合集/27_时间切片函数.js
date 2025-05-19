// data 数据  func 插入操作  interval 时间周期  该周期插入的项目数
var timeChunk = function (data, func, interval, count) {
    var obj, timer;
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, data.length); i++) {
            obj = data.shift();
            func(obj);
        }
    };
    return function () {
        timer = setInterval(function () {
            if (data.length === 0) {
                return clearInterval(timer);
            }
            start();
        }, interval);
    };
}

var data = [];
for (var i = 1; i <= 1000; i++) {
    data.push(i);
};
renderFriendList = timeChunk(data, function (n) {
    var div = document.createElement('div');
    div.innerHTML = n;
    document.body.appendChild(div);
}, 200, 10);
renderFriendList();