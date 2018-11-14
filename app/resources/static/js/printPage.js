//gets parameters from the url
function getParams() {
  var params = {};
  var param_array = window.location.href.split('?')[1].split('&');
  for (var i in param_array) {
    x = param_array[i].split('=');
    params[x[0]] = x[1];
  }
  return params;
};


var tableInfo = sessionStorage.getItem("data");
console.log(tableInfo);
