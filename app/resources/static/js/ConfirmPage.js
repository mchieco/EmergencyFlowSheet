var tableConts = sessionStorage.getItem("strTable");
var rowCount = sessionStorage.getItem("tableRows");
var i = 1;

console.log(rowCount);
addRows(rowCount);

function getParams(){
  var params = {};
  var param_array = window.location.href.split('?')[1].split('&');
  for(var i in param_array){
    x = param_array[i].split('=');
    params[x[0]] = x[1];
  }
  return params;
};

function getText(){

};

function addRows(amount) {

  //move info to table
  var completeTable = document.getElementById("completeTable");
  // add a new row
  var row = completeTable.insertRow(i);
  // add a cell to row
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  // add info to cells
  i++;
  amount--;
  //removes text and saves it to var
  var text = getText();

  cell7.innerHTML = text;
  cell1.innerHTML = "-";
  cell2.innerHTML = "-";
  cell3.innerHTML = "-";
  cell4.innerHTML = "-";
  cell5.innerHTML = "-";
  cell6.innerHTML = "-";

  if(amount > 0) {
    addRows(amount);
  }
  //keeps from submitting form
  return false;
};
