var url = "./";
var source = new EventSource(url);
// CrossDomain
// var source = new EventSource(url, {
//   withCredentials: true
// });


// 连接一旦建立，就会触发Open事件，就可以添加回调属性
source.addEventListener('open', function (event) {
  // ...
  console.log("SSE has concented");
}, false);

// 客户端收到服务器发来的数据，就会触发message事件，就可以添加回调
source.addEventListener('message', function (event) {
  var data = event.data;
  console.log("server push message to clint");
}, false);

// 客户端收到服务器发来的数据，就会触发message事件，就可以添加回调
source.addEventListener('error', function (event) {
  console.log("SSE meet a problem");
}, false);

// 这是关闭SSE链接的
// source.close();