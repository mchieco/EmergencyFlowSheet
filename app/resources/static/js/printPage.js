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


document.addEventListener('DOMContentLoaded', function () {
  //gets the table
  var table = document.getElementById("data");

  //gets the ammount of rows
  var rowAmount = sessionStorage.getItem("tableRows");
  //adds a row for the code started and code finished
  rowAmount++;
  rowAmount++;


  var rowLoc = 1;
  var cellLoc = 0;
  while(rowLoc <= rowAmount){

    //if there are no cells in the row adds another row and cells
    if(cellLoc == 0) {
      //adds a row
      var row = table.insertRow(rowLoc);
      // add a cell to row
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell1.innerHTML = getText();
      cell2.innerHTML = getText();
      cell3.innerHTML = getText();
      cell4.innerHTML = getText();
      cell5.innerHTML = getText();
      cell6.innerHTML = getText();
      cell7.innerHTML = getText();

    }
    rowLoc++;
  }
}, false);

//gets the info for the table by seraching for the key -- then moving to the next cell
var tableInfo = sessionStorage.getItem("data");
function getText() {
  var loc = tableInfo.indexOf("--");
  if (loc == -1) {
    var text = tableInfo;
  } else {
    var text = tableInfo.substring(0, loc);
    tableInfo = tableInfo.substring(loc+2, tableInfo.length);
  }
  return text;

}

//removes the + in the URL parameters and sets them to spaces
function fixParams(text){
  while(text.indexOf("+") != -1){
    text = text.replace("+"," ");
    fixParams(text);
  }
  return text;
}
